export interface VeiculosDados extends Array<VeiculoDados>{};

export interface VeiculoDados {
	id: number;
	vin: string;
	odometer: number;
	tirePressure: string;
	status: string;
	batteryStatus: string;
	fuelLevel: number;
	lat: string;
	long: string;
}

export interface VeiculosDadosApi {
	vehicleData: VeiculosDados;
}
