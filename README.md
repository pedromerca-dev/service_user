## EJECUTAR SERVIDOR

- npm run dev

## ARQUITECTURA HEXAGONAL

```
app.js  
src/
├── services.js  
├── Config/  
├── Products/
│   ├── application/
│   │   └── ProductService.js
│   ├── domain/
│   │   └── Product.js
│   ├── infrastructure/
│   │   ├── database/
│   │   │   └── ProductRepository.js
│   │   └── http/
│   │       ├── controller/
│   │       │   └── productController.js
│   │       └── routes/
│   │           └── productRoutes.js
│   │
├── Categories/
│   ├── application/
│   │   └── CategoryService.js
│   ├── domain/
│   │   └── Category.js
│   ├── infrastructure/
│   │   ├── database/
│   │   │   └── CategoryRepository.js
│   │   └── http/
│   │       ├── controller/
│   │       │   └── categoryController.js
│   │       └── routes/
│   │           └── categoryRoutes.js
│
```
