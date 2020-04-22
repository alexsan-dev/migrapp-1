importScripts('sw-utils.js')

const STATIC_CACHE = 'static-v3';
const DYNAMIC_CACHE = 'dynamic-v2';
const INMUTABLE_CACHE = 'inmutable-v1';

// APP SHELL, todo lo necesario para que la aplicacion funcione
const appShell = [
    // './',
    './index.html',
    './css/style.css',
    './js/app.js',   // Corazon de la aplicacion
    './js/sw-utils.js'
]

const appShellInmutable = [
    'https://fonts.googleapis.com/css?family=Quicksand:300,400',
    'https://fonts.googleapis.com/css?family=Lato:400,300',
    'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
    './css/animate.css',
]

self.addEventListener('install', event => {

    const cacheStatic = caches.open(STATIC_CACHE).then(cache => cache.addAll(appShell))
    const cacheInmutable = caches.open(INMUTABLE_CACHE).then(cache => cache.addAll(appShellInmutable))

    event.waitUntil(Promise.all([cacheStatic, cacheInmutable]))
})

// Borre los caches antiguos
self.addEventListener('activate', event => {
    const respuesta = caches.keys().then(keys => {
        keys.forEach(key => {
            if (key !== STATIC_CACHE && key.includes('static')) {
                return caches.delete(key)
            }
            if (key !== DYNAMIC_CACHE && key.includes('dynamic')) {
                return caches.delete(key)
            }
        })
    })
    event.waitUntil(respuesta)
})

// ---------------------------------------------------------
//      Antes de anadir las estrategias del cache, hay que comprobar si funciona
// ---------------------------------------------------------
// Estrategia de primero online y despues sirve del cache
self.addEventListener('fetch', event => {

    // Verificamos en el cache si existe la request
    const respuesta = caches.match(event.request).then(res => {
        if (res) {
            return res
        } else {
            // Recurso nuevo que hace la peticion del interior de otros archivos importados
            return fetch(event.request).then(newRes => {
                return actualizaCacheDinamico(DYNAMIC_CACHE, event.request, newRes)
            })

        }
    })

    event.respondWith(respuesta)
})