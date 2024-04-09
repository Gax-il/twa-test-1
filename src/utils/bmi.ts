import { IBMI, ICalBMI } from "../interfaces/bmi";

interface CalculateBMIProps {
	values: IBMI;
}

export const CalculateBMI = ({ values }: CalculateBMIProps): ICalBMI => {
	const bmi = values.weight / ((values.height / 100) * (values.height / 100));
	let state: number;
	if (bmi < 19) state = 1;
	else if (bmi < 24) state = 2;
	else if (bmi < 29) state = 3;
	else if (bmi < 39) state = 4;
	else state = 5;
	return { value: bmi, state: state };
};

export const BMIStateName = (state: number) => {
	switch (state) {
		case 1:
			return "Podváha";
		case 2:
			return "Optimální váha";
		case 3:
			return "Nadváha";
		case 4:
			return "Obezita";
		case 5:
			return "Silná obezita";
	}
};

export const BMIStateColor = (state: number) => {
	switch (state) {
		case 1:
			return "text-yellow-500";
		case 2:
			return "text-green-400";
		case 3:
			return "text-yellow-500";
		case 4:
			return "text-rose-500";
		case 5:
			return "text-red-700";
	}
};
