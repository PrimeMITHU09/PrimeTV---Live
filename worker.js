// PrimeTV IPTV CORS Proxy - Cloudflare Worker
export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': '*',
        }
      })
    }

    const url = new URL(request.url)
    const targetUrl = url.searchParams.get('url')

    if (!targetUrl) {
      return new Response('PrimeTV Proxy is running! Use ?url=YOUR_STREAM_URL', {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
    }

    try {
      const response = await fetch(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Referer': new URL(targetUrl).origin,
        }
      })

      if (!response.ok) {
        return new Response('Stream unavailable', { status: response.status })
      }

      const contentType = response.headers.get('content-type') || ''
      const isM3U8 = contentType.includes('mpegurl') ||
                     contentType.includes('x-mpegurl') ||
                     targetUrl.includes('.m3u8') ||
                     targetUrl.includes('.m3u')

      if (isM3U8) {
        const text = await response.text()
        const proxyBase = `${url.origin}${url.pathname}`

        const rewritten = text.replace(/^([^#\s].+)$/gm, (match) => {
          if (match.startsWith('#')) return match
          let absoluteUrl = match
          if (!match.startsWith('http')) {
            absoluteUrl = new URL(match, targetUrl).href
          }
          return `${proxyBase}?url=${encodeURIComponent(absoluteUrl)}`
        })

        return new Response(rewritten, {
          headers: {
            'Content-Type': 'application/vnd.apple.mpegurl',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache',
          }
        })
      }

      return new Response(response.body, {
        headers: {
          'Content-Type': contentType || 'video/MP2T',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache',
        }
      })

    } catch (err) {
      return new Response(`Proxy error: ${err.message}`, { status: 500 })
    }
  }
}
