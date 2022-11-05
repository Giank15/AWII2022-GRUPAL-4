"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle("Pedido a mesero")
        .setDescription("Servicio rest de pedido a mesero")
        .setVersion("1.0")
        .addTag("pedidos")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup("api/docs", app, document, {
        explorer: true,
        swaggerOptions: {
            filter: true,
            showRequestDuration: true,
        }
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map