const productos = [
    {
        "id": 1,
        "nombre": "Camisa oversize blanca",
        "imagen": "./img/CamisaBlanca.png",
        "precio": 13498,
        "descripcion": "Esta camisa oversize blanca es perfecta para un look relajado y moderno.",
        "estado": "Nuevo",
        "categoria": "Camisas",
        "stock": 16,
        "tiempoEntrega": 9,
        "gastosEnvio": 72,
        "opcionesEntrega": "envío y recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 2,
        "nombre": "Camisa oversize negra",
        "imagen": "./img/CamisaNegra.png",
        "precio": 19387,
        "descripcion": "Esta camisa oversize negra es un básico que no puede faltar en tu armario.",
        "estado": "Nuevo",
        "categoria": "Camisas",
        "stock": 7,
        "tiempoEntrega": 9,
        "gastosEnvio": 173,
        "opcionesEntrega": "envío y recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 3,
        "nombre": "Camisa oversize verde",
        "imagen": "./img/CamisaVerde.png",
        "precio": 13666,
        "descripcion": "Añade un toque de color con esta camisa oversize verde, ideal para cualquier ocasión.",
        "estado": "Nuevo",
        "categoria": "Camisas",
        "stock": 1,
        "tiempoEntrega": 6,
        "gastosEnvio": 124,
        "opcionesEntrega": "recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 4,
        "nombre": "Camisa oversize celeste",
        "imagen": "./img/CamisaCeleste.png",
        "precio": 15872,
        "descripcion": "Dale un toque de pasión a tu outfit con esta camisa oversize celeste.",
        "estado": "Nuevo",
        "categoria": "Camisas",
        "stock": 12,
        "tiempoEntrega": 2,
        "gastosEnvio": 77,
        "opcionesEntrega": "recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 5,
        "nombre": "Camisa oversize beige",
        "imagen": "./img/CamisaBeige.png",
        "precio": 18765,
        "descripcion": "Esta camisa oversize verde te hará destacar con su color vibrante.",
        "estado": "Nuevo",
        "categoria": "Camisas",
        "stock": 11,
        "tiempoEntrega": 3,
        "gastosEnvio": 82,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 6,
        "nombre": "Camisa oversize blanca",
        "imagen": "./img/CamisaBlanca2.png",
        "precio": 14567,
        "descripcion": "Brilla como el sol con esta camisa oversize blanca.",
        "estado": "Nuevo",
        "categoria": "Camisas",
        "stock": 3,
        "tiempoEntrega": 9,
        "gastosEnvio": 111,
        "opcionesEntrega": "envío y recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 7,
        "nombre": "Gorra roja",
        "imagen": "./img/gorraRoja.jpg",
        "precio": 9969,
        "descripcion": "Protege tu rostro del sol con estilo con esta gorra roja.",
        "estado": "Nuevo",
        "categoria": "Gorras",
        "stock": 5,
        "tiempoEntrega": 5,
        "gastosEnvio": 167,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 8,
        "nombre": "Gorra azul",
        "imagen": "./img/gorraAzul.jpg",
        "precio": 20978,
        "descripcion": "Dale un toque de color a tu atuendo con esta gorra azul vibrante.",
        "estado": "Nuevo",
        "categoria": "Gorras",
        "stock": 18,
        "tiempoEntrega": 10,
        "gastosEnvio": 159,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 9,
        "nombre": "Gorra verde",
        "imagen": "./img/gorraVerde.jpg",
        "precio": 17589,
        "descripcion": "Complementa tu estilo casual con esta gorra verde.",
        "estado": "Nuevo",
        "categoria": "Gorras",
        "stock": 19,
        "tiempoEntrega": 4,
        "gastosEnvio": 65,
        "opcionesEntrega": "envío y recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 10,
        "nombre": "Gorra negra",
        "imagen": "./img/gorraNegra.jpg",
        "precio": 19982,
        "descripcion": "Una gorra negra clásica para cualquier ocasión.",
        "estado": "Nuevo",
        "categoria": "Gorras",
        "stock": 12,
        "tiempoEntrega": 4,
        "gastosEnvio": 179,
        "opcionesEntrega": "envío y recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 11,
        "nombre": "Gorra Verde Claro",
        "imagen": "./img/gorraVerdeO.jpg",
        "precio": 12234,
        "descripcion": "Esta gorra verde claro es el accesorio perfecto para un look moderno.",
        "estado": "Nuevo",
        "categoria": "Gorras",
        "stock": 17,
        "tiempoEntrega": 2,
        "gastosEnvio": 70,
        "opcionesEntrega": "recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 12,
        "nombre": "Gorro de lana azul",
        "imagen": "./img/gorroAzul.jpg",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 20091,
        "descripcion": "Mantén tu cabeza abrigada con este gorro de lana azul, ideal para el invierno.",
        "estado": "Nuevo",
        "categoria": "Gorros",
        "stock": 10,
        "tiempoEntrega": 9,
        "gastosEnvio": 82,
        "opcionesEntrega": "recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            },
            {
                "autor": "Usuario3",
                "comentario": "Prueba BB"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 13,
        "nombre": "Gorro de lana verde",
        "imagen": "./img/GorroVerde1.jpg",
        "precio": 23558,
        "descripcion": "Este gorro de lana verde es perfecto para un look casual y cómodo.",
        "estado": "Nuevo",
        "categoria": "Gorros",
        "stock": 1,
        "tiempoEntrega": 1,
        "gastosEnvio": 118,
        "opcionesEntrega": "recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 14,
        "nombre": "Gorro de lana verde claro",
        "imagen": "./img/gorroVerde2.jpg",
        "precio": 17834,
        "descripcion": "Mantén el calor con estilo con este gorro de lana verde clara.",
        "estado": "Nuevo",
        "categoria": "Gorros",
        "stock": 11,
        "tiempoEntrega": 3,
        "gastosEnvio": 140,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 15,
        "nombre": "Gorro de lana vino",
        "imagen": "./img/gorroVino.jpg",
        "precio": 14567,
        "descripcion": "Destaca en los días fríos con este gorro de lana vino vibrante.",
        "estado": "Nuevo",
        "categoria": "Gorros",
        "stock": 1,
        "tiempoEntrega": 1,
        "gastosEnvio": 144,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 16,
        "nombre": "Gorro de lana morado",
        "imagen": "./img/gorroMorado.jpg",
        "precio": 16078,
        "descripcion": "Este gorro de lana morada es el complemento perfecto para tus atuendos invernales.",
        "estado": "Nuevo",
        "categoria": "Gorros",
        "stock": 6,
        "tiempoEntrega": 1,
        "gastosEnvio": 134,
        "opcionesEntrega": "envío y recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Usuario1",
                "comentario": "Excelente calidad y servicio."
            },
            {
                "autor": "Usuario2",
                "comentario": "Muy satisfecho con el producto."
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    }
]