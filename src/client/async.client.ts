import { NormalFunction, ArrowFunction, AsyncFunction } from "shared/functions";

function lerp(a: number, b: number, t: number) {
	return a + (b - a) * t;
}

const progress = lerp(0, 100, 0.5);

const lerp2 = (a: number, b: number, t: number) => a + (b - a) * t;

const progress2 = lerp2(0, 100, 0.5);

const normal = NormalFunction();

const arrow = ArrowFunction();

const asyncs = AsyncFunction().then((result) => {});
