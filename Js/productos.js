const productos = [
    {
        "id": 1,
        "nombre": "Camisa oversize blanca",
        "imagen": "./img/CamisaBlanca.png",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 15000,
        "descripcion": "Esta camisa oversize blanca es perfecta para un look relajado y moderno.",
        "estado": "Nuevo",
        "categoria": "Camisas",
        "stock": "Disponible",
        "tiempoEntrega": 9,
        "gastosEnvio": 72,
        "opcionesEntrega": "envío y recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad y servicio.⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Muy satisfecho con el producto.⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 2,
        "nombre": "Camisa oversize negra",
        "imagen": "./img/CamisaNegra.png",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 16500,
        "descripcion": "Esta camisa oversize negra es un básico que no puede faltar en tu armario.",
        "estado": "Nuevo",
        "categoria": "Camisas",
        "stock": "Disponible",
        "tiempoEntrega": 9,
        "gastosEnvio": 173,
        "opcionesEntrega": "envío y recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad y servicio.⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Muy satisfecho con el producto.⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 3,
        "nombre": "Camisa oversize verde",
        "imagen": "./img/CamisaVerde.png",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 15500,
        "descripcion": "Añade un toque de color con esta camisa oversize verde, ideal para cualquier ocasión.",
        "estado": "Nuevo",
        "categoria": "Camisas",
        "stock": "Disponible",
        "tiempoEntrega": 6,
        "gastosEnvio": 124,
        "opcionesEntrega": "recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad y servicio.⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Muy satisfecho con el producto.⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 4,
        "nombre": "Camisa oversize celeste",
        "imagen": "./img/CamisaCeleste.png",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 16000,
        "descripcion": "Dale un toque de pasión a tu outfit con esta camisa oversize celeste.",
        "estado": "Nuevo",
        "categoria": "Camisas",
        "stock": "Disponible",
        "tiempoEntrega": 2,
        "gastosEnvio": 77,
        "opcionesEntrega": "recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad y servicio.⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Muy satisfecho con el producto.⭐⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 5,
        "nombre": "Camisa oversize beige",
        "imagen": "./img/CamisaBeige.png",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 17000,
        "descripcion": "Esta camisa oversize beige te hará destacar con su color vibrante.",
        "estado": "Nuevo",
        "categoria": "Camisas",
        "stock": "Disponible",
        "tiempoEntrega": 3,
        "gastosEnvio": 82,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad y servicio.⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Muy satisfecho con el producto.⭐⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 6,
        "nombre": "Camisa oversize blanca",
        "imagen": "./img/CamisaBlanca2.png",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 15500,
        "descripcion": "Brilla como el sol con esta camisa oversize blanca.",
        "estado": "Nuevo",
        "categoria": "Camisas",
        "stock": "Disponible",
        "tiempoEntrega": 9,
        "gastosEnvio": 111,
        "opcionesEntrega": "envío y recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad y servicio.⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Muy satisfecho con el producto sin embargo se podria mejorar.⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 7,
        "nombre": "Gorra roja",
        "imagen": "./img/gorraRoja.jpg",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 10000,
        "descripcion": "Protege tu rostro del sol con estilo con esta gorra roja.",
        "estado": "Nuevo",
        "categoria": "Gorras",
        "stock": "Disponible",
        "tiempoEntrega": 5,
        "gastosEnvio": 167,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad y servicio.⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Muy satisfecho con el producto.⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 8,
        "nombre": "Gorra azul",
        "imagen": "./img/gorraAzul.jpg",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 12000,
        "descripcion": "Dale un toque de color a tu atuendo con esta gorra azul vibrante.",
        "estado": "Nuevo",
        "categoria": "Gorras",
        "stock": "Disponible",
        "tiempoEntrega": 10,
        "gastosEnvio": 159,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad y servicio.⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Muy satisfecho con el producto.⭐⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 9,
        "nombre": "Gorra verde",
        "imagen": "./img/gorraVerde.jpg",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 17500,
        "descripcion": "Complementa tu estilo casual con esta gorra verde.",
        "estado": "Nuevo",
        "categoria": "Gorras",
        "stock": "Disponible",
        "tiempoEntrega": 4,
        "gastosEnvio": 65,
        "opcionesEntrega": "envío y recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad pero me quedo ajustada.⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Muy satisfecho con el producto.⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 10,
        "nombre": "Gorra negra",
        "imagen": "./img/gorraNegra.jpg",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 20000,
        "descripcion": "Una gorra negra clásica para cualquier ocasión.",
        "estado": "Nuevo",
        "categoria": "Gorras",
        "stock": "Disponible",
        "tiempoEntrega": 4,
        "gastosEnvio": 179,
        "opcionesEntrega": "envío y recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad y servicio.⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Muy satisfecho con el producto.⭐⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 11,
        "nombre": "Gorra Verde Claro",
        "imagen": "./img/gorraVerdeO.jpg",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 12000,
        "descripcion": "Esta gorra verde claro es el accesorio perfecto para un look moderno.",
        "estado": "Nuevo",
        "categoria": "Gorras",
        "stock": "Disponible",
        "tiempoEntrega": 2,
        "gastosEnvio": 70,
        "opcionesEntrega": "recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad y servicio.⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Muy satisfecho con el producto.⭐⭐⭐"
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
        "precio": 19000,
        "descripcion": "Mantén tu cabeza abrigada con este gorro de lana azul, ideal para el invierno.",
        "estado": "Nuevo",
        "categoria": "Gorros",
        "stock": "Disponible",
        "tiempoEntrega": 9,
        "gastosEnvio": 82,
        "opcionesEntrega": "recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad y servicio.⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Muy satisfecho con el producto.⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 13,
        "nombre": "Gorro de lana verde",
        "imagen": "./img/GorroVerde1.jpg",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 23000,
        "descripcion": "Este gorro de lana verde es perfecto para un look casual y cómodo.",
        "estado": "Nuevo",
        "categoria": "Gorros",
        "stock": "Disponible",
        "tiempoEntrega": 1,
        "gastosEnvio": 118,
        "opcionesEntrega": "recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad y servicio.⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "No me gusto, muy caliente.⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 14,
        "nombre": "Gorro de lana verde claro",
        "imagen": "./img/gorroVerde2.jpg",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 18000,
        "descripcion": "Mantén el calor con estilo con este gorro de lana verde clara.",
        "estado": "Nuevo",
        "categoria": "Gorros",
        "stock": "Disponible",
        "tiempoEntrega": 3,
        "gastosEnvio": 140,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad y servicio.⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Muy satisfecho con el producto. ⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 15,
        "nombre": "Gorro de lana vino",
        "imagen": "./img/gorroVino.jpg",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 15000,
        "descripcion": "Destaca en los días fríos con este gorro de lana vino vibrante.",
        "estado": "Nuevo",
        "categoria": "Gorros",
        "stock": "Disponible",
        "tiempoEntrega": 1,
        "gastosEnvio": 144,
        "opcionesEntrega": "envío",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad y servicio.⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Muy satisfecho con el producto pero el precio elevado. ⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    },
    {
        "id": 16,
        "nombre": "Gorro de lana morado",
        "imagen": "./img/gorroMorado.jpg",
        "images": ["./img/gorraAzul.jpg", "./img/gorraVerde.jpg", "./img/gorraRoja.jpg"],
        "precio": 16000,
        "descripcion": "Este gorro de lana morada es el complemento perfecto para tus atuendos invernales.",
        "estado": "Nuevo",
        "categoria": "Gorros", 
        "stock": "Disponible",
        "tiempoEntrega": 1,
        "gastosEnvio": 134,
        "opcionesEntrega": "envío y recogida en tienda",
        "garantia": "Garantía de 1 año para defectos de fabricación",
        "reseñas": [
            {
                "autor": "Luis Arguedas",
                "comentario": "Excelente calidad y servicio.⭐⭐⭐⭐⭐"
            },
            {
                "autor": "Esteban Jimenez",
                "comentario": "Muy satisfecho con el producto. ⭐⭐⭐⭐"
            }
        ],
        "enlaceContacto": "contacto",
        "informacionCambiosDevoluciones": "devoluciones"
    }
]