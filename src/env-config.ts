export interface IHostProps {
	protocol: string;
	hostname: string;
	port: number;
}
export interface IConfig {
	dev: {
		host: IHostProps;
	}
	prod: {
		host: IHostProps;
	}
}

export function urlBuilder(urlProps: IHostProps){
	const { hostname, port, protocol } = urlProps;
	if (!hostname || !protocol) return;
  
	return `${protocol}://${hostname}${port? ':'+port : ''}`
  }
  
export const ClienteDemoConfig : IConfig = {
	dev: {
		host: {
			protocol: 'http',
			hostname: '127.0.0.1',
			port: 8000,
		},
	},
	prod: {
		host: {
			protocol: 'http',
			hostname: '127.0.0.1',
			port: 8080,
		},
	},	
} 
export const ClienteACCMTConfig : IConfig = {
	dev: {
		host: {
			protocol: 'http',
			hostname: '127.0.0.1',
			port: 8000,
		},
	},
	prod: {
		host: {
			protocol: 'http',
			hostname: '127.0.0.1',
			port: 8080,
		},
	},	
} 



