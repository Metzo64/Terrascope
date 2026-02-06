import http.server
import socketserver

PORT = 5000
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving TerraScope at http://localhost:{PORT}/signup.html")
    httpd.serve_forever()
