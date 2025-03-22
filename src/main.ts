import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.enableCors({
        origin: [
            'http://localhost:5173',
            'https://4eab-123-192-236-27.ngrok-free.app',
            'https://buybuy-fe-production.up.railway.app',
            'https://liff.line.me/2007085677-AY2mR3rN'
        ]
    })
    await app.listen(process.env.PORT ?? 3000)
    console.log(`Server is running on port ${process.env.PORT ?? 3000}`)
}
bootstrap()
