import express from 'express';
import { AddressInfo } from 'net';
import { ClienteDemoConfig, urlBuilder } from './env-config';

const app = express();

const environment = process.env.NODE_ENV;
const defaultPort = process.env.PORT || 8080;
const targetCostumer = process.env.npm_config_target_costumer || '';

const url = urlBuilder(
	environment == 'DEVELOPMENT'
		? ClienteDemoConfig.dev.host 
		: ClienteDemoConfig.prod.host
);

app.get('/', (req, res) => {
	res.json({
		environment,
		targetCostumer,
		url,
	});
});

const server = app.listen(defaultPort, () => {});

const { port } = server.address() as AddressInfo;
console.log(`Server running on port ${port}, at env ${environment}`);
