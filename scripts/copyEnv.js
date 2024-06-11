import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const env = process.argv[2];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceFile = path.join(__dirname, '..', 'envs', `${env}.env`);
const destinationFile = path.join(__dirname, '..', '.env');

try {
  await fs.access(sourceFile);
  await fs.copyFile(sourceFile, destinationFile);
  console.log(`Archivo de entorno ${env} copiado a .env`);
} catch (err) {
  console.error(`Error al copiar el archivo de entorno: ${err.message}`);
  process.exit(1);
}