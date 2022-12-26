export function obtenerSubdominio() {
    var host = window.location.host
    var subdomain = 'land'
    if (host.includes('.')){
        subdomain = host.split('.')[0]
    }
    return subdomain;
}