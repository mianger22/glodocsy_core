import { useState } from "react";
import CubatureCalculationBlock from "./CubatureCalculationBlock";

function CubatureCalculation() {
  const [isEl, setEl] = useState(0);
  const [isKol, setKol] = useState(0);

  const [isHistory, setHistory] = useState([
    {
        breed: 'Осина', 
        category: undefined,
        data: []
    },
    {
        breed: 'Берёза', 
        category: undefined,
        data: []
    },
    {
        breed: 'Ольха серая', 
        category: undefined,
        data: []
    },
    {
        breed: 'Ольха чёрная', 
        category: undefined,
        data: []
    },
    {
        breed: 'Ель', 
        category: undefined,
        data: []
    },
    {
        breed: 'Сосна', 
        category: undefined,
        data: []
    },
  ]);

  const cubatureData = [
    {
        id: 1, 
        section_name: 'Основные',
        section_data: [
            {   
                id: 1,
                group_name: '4 разряд',
                group_data: [
                    {
                        id: 1,
                        breed: 'Осина',
                        category: 4,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.035},
                            {id: 2, diameter: 12, volume: 0.096},
                            {id: 3, diameter: 16, volume: 0.19},
                            {id: 4, diameter: 20, volume: 0.31},
                            {id: 5, diameter: 24, volume: 0.47},
                            {id: 6, diameter: 28, volume: 0.67},
                            {id: 7, diameter: 32, volume: 0.89},
                            {id: 8, diameter: 36, volume: 1.16},
                            {id: 9, diameter: 40, volume: 1.45},
                            {id: 10, diameter: 44, volume: 1.78},
                            {id: 11, diameter: 48, volume: 2.09},
                            {id: 12, diameter: 52, volume: 2.40},
                        ]
                    },
                    {
                        id: 2,
                        breed: 'Берёза',
                        category: 4,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.030},
                            {id: 2, diameter: 12, volume: 0.090},
                            {id: 3, diameter: 16, volume: 0.18},
                            {id: 4, diameter: 20, volume: 0.31},
                            {id: 5, diameter: 24, volume: 0.49},
                            {id: 6, diameter: 28, volume: 0.68},
                            {id: 7, diameter: 32, volume: 0.91},
                            {id: 8, diameter: 36, volume: 1.18},
                            {id: 9, diameter: 40, volume: 1.48},
                            {id: 10, diameter: 44, volume: 1.81},
                            {id: 11, diameter: 48, volume: 2.13},
                            {id: 12, diameter: 52, volume: 2.45},
                        ]
                    },
                    {
                        id: 3,
                        breed: 'Ель',
                        category: 4,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.029},
                            {id: 2, diameter: 12, volume: 0.091},
                            {id: 3, diameter: 16, volume: 0.19},
                            {id: 4, diameter: 20, volume: 0.33},
                            {id: 5, diameter: 24, volume: 0.50},
                            {id: 6, diameter: 28, volume: 0.71},
                            {id: 7, diameter: 32, volume: 0.96},
                            {id: 8, diameter: 36, volume: 1.25},
                            {id: 9, diameter: 40, volume: 1.74},
                            {id: 10, diameter: 44, volume: 1.91},
                            {id: 11, diameter: 48, volume: 2.31},
                            {id: 12, diameter: 52, volume: 2.74},
                            {id: 13, diameter: 56, volume: 3.19},
                        ]
                    },
                    {
                        id: 4,
                        breed: 'Сосна',
                        category: 4,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.037},
                            {id: 2, diameter: 12, volume: 0.098},
                            {id: 3, diameter: 16, volume: 0.19},
                            {id: 4, diameter: 20, volume: 0.32},
                            {id: 5, diameter: 24, volume: 0.48},
                            {id: 6, diameter: 28, volume: 0.68},
                            {id: 7, diameter: 32, volume: 0.90},
                            {id: 8, diameter: 36, volume: 1.16},
                            {id: 9, diameter: 40, volume: 1.45},
                            {id: 10, diameter: 44, volume: 1.77},
                            {id: 11, diameter: 48, volume: 2.14},
                            {id: 12, diameter: 52, volume: 2.51},
                        ]
                    },
                    {
                        id: 5,
                        breed: 'Ольха серая',
                        category: 4,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.035},
                            {id: 2, diameter: 12, volume: 0.096},
                            {id: 3, diameter: 16, volume: 0.19},
                            {id: 4, diameter: 20, volume: 0.31},
                            {id: 5, diameter: 24, volume: 0.47},
                            {id: 6, diameter: 28, volume: 0.67},
                            {id: 7, diameter: 32, volume: 0.89},
                            {id: 8, diameter: 36, volume: 1.16},
                            {id: 9, diameter: 40, volume: 1.45},
                            {id: 10, diameter: 44, volume: 1.78},
                            {id: 11, diameter: 48, volume: 2.09},
                            {id: 12, diameter: 52, volume: 2.40},
                        ]
                    },
                    {
                        id: 6,
                        breed: 'Ольха чёрная',
                        category: 4,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.030},
                            {id: 2, diameter: 12, volume: 0.090},
                            {id: 3, diameter: 16, volume: 0.18},
                            {id: 4, diameter: 20, volume: 0.31},
                            {id: 5, diameter: 24, volume: 0.49},
                            {id: 6, diameter: 28, volume: 0.68},
                            {id: 7, diameter: 32, volume: 0.91},
                            {id: 8, diameter: 36, volume: 1.18},
                            {id: 9, diameter: 40, volume: 1.48},
                            {id: 10, diameter: 44, volume: 1.81},
                            {id: 11, diameter: 48, volume: 2.13},
                            {id: 12, diameter: 52, volume: 2.45},
                        ]
                    }
                ]
            },
            {   
                id: 2,
                group_name: '3 разряд',
                group_data: [
                    {
                        id: 1,
                        breed: 'Осина',
                        category: 3,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.036},
                            {id: 2, diameter: 12, volume: 0.099},
                            {id: 3, diameter: 16, volume: 0.20},
                            {id: 4, diameter: 20, volume: 0.34},
                            {id: 5, diameter: 24, volume: 0.51},
                            {id: 6, diameter: 28, volume: 0.73},
                            {id: 7, diameter: 32, volume: 0.98},
                            {id: 8, diameter: 36, volume: 1.26},
                            {id: 9, diameter: 40, volume: 1.59},
                            {id: 10, diameter: 44, volume: 1.93},
                            {id: 11, diameter: 48, volume: 2.30},
                            {id: 12, diameter: 52, volume: 2.67},
                        ]
                    },
                    {
                        id: 2,
                        breed: 'Берёза',
                        category: 3,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.032},
                            {id: 2, diameter: 12, volume: 0.097},
                            {id: 3, diameter: 16, volume: 0.20},
                            {id: 4, diameter: 20, volume: 0.34},
                            {id: 5, diameter: 24, volume: 0.52},
                            {id: 6, diameter: 28, volume: 0.73},
                            {id: 7, diameter: 32, volume: 0.98},
                            {id: 8, diameter: 36, volume: 1.26},
                            {id: 9, diameter: 40, volume: 1.59},
                            {id: 10, diameter: 44, volume: 1.95},
                            {id: 11, diameter: 48, volume: 2.31},
                            {id: 12, diameter: 52, volume: 2.67},
                        ]
                    },
                    {
                        id: 3,
                        breed: 'Ель',
                        category: 3,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.033},
                            {id: 2, diameter: 12, volume: 0.101},
                            {id: 3, diameter: 16, volume: 0.21},
                            {id: 4, diameter: 20, volume: 0.36},
                            {id: 5, diameter: 24, volume: 0.54},
                            {id: 6, diameter: 28, volume: 0.79},
                            {id: 7, diameter: 32, volume: 1.06},
                            {id: 8, diameter: 36, volume: 1.37},
                            {id: 9, diameter: 40, volume: 1.74},
                            {id: 10, diameter: 44, volume: 2.12},
                            {id: 11, diameter: 48, volume: 2.54},
                            {id: 12, diameter: 52, volume: 3.01},
                            {id: 13, diameter: 56, volume: 3.52},
                        ]
                    },
                    {
                        id: 4,
                        breed: 'Сосна',
                        category: 3,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.039},
                            {id: 2, diameter: 12, volume: 0.112},
                            {id: 3, diameter: 16, volume: 0.21},
                            {id: 4, diameter: 20, volume: 0.35},
                            {id: 5, diameter: 24, volume: 0.52},
                            {id: 6, diameter: 28, volume: 0.73},
                            {id: 7, diameter: 32, volume: 0.98},
                            {id: 8, diameter: 36, volume: 1.26},
                            {id: 9, diameter: 40, volume: 1.57},
                            {id: 10, diameter: 44, volume: 1.92},
                            {id: 11, diameter: 48, volume: 2.28},
                            {id: 12, diameter: 52, volume: 2.64},
                        ]
                    },
                    {
                        id: 5,
                        breed: 'Ольха серая',
                        category: 3,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.036},
                            {id: 2, diameter: 12, volume: 0.099},
                            {id: 3, diameter: 16, volume: 0.20},
                            {id: 4, diameter: 20, volume: 0.34},
                            {id: 5, diameter: 24, volume: 0.51},
                            {id: 6, diameter: 28, volume: 0.73},
                            {id: 7, diameter: 32, volume: 0.98},
                            {id: 8, diameter: 36, volume: 1.26},
                            {id: 9, diameter: 40, volume: 1.59},
                            {id: 10, diameter: 44, volume: 1.93},
                            {id: 11, diameter: 48, volume: 2.30},
                            {id: 12, diameter: 52, volume: 2.67},
                        ]
                    },
                    {
                        id: 6,
                        breed: 'Ольха чёрная',
                        category: 3,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.032},
                            {id: 2, diameter: 12, volume: 0.097},
                            {id: 3, diameter: 16, volume: 0.20},
                            {id: 4, diameter: 20, volume: 0.34},
                            {id: 5, diameter: 24, volume: 0.52},
                            {id: 6, diameter: 28, volume: 0.73},
                            {id: 7, diameter: 32, volume: 0.98},
                            {id: 8, diameter: 36, volume: 1.26},
                            {id: 9, diameter: 40, volume: 1.59},
                            {id: 10, diameter: 44, volume: 1.95},
                            {id: 11, diameter: 48, volume: 2.31},
                            {id: 12, diameter: 52, volume: 2.67},
                        ]
                    },
                ]
            },
            {   
                id: 3,
                group_name: '5 разряд',
                group_data: [
                    {
                        id: 1,
                        breed: 'Берёза',
                        category: 5,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.028},
                            {id: 2, diameter: 12, volume: 0.081},
                            {id: 3, diameter: 16, volume: 0.17},
                            {id: 4, diameter: 20, volume: 0.28},
                            {id: 5, diameter: 24, volume: 0.43},
                            {id: 6, diameter: 28, volume: 0.61},
                            {id: 7, diameter: 32, volume: 0.82},
                            {id: 8, diameter: 36, volume: 1.06},
                            {id: 9, diameter: 40, volume: 1.33},
                            {id: 10, diameter: 44, volume: 1.65},
                            {id: 11, diameter: 48, volume: 1.97},
                            {id: 12, diameter: 52, volume: 2.29},
                        ]
                    },
                    {
                        id: 2,
                        breed: 'Ель',
                        category: 5,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.028},
                            {id: 2, diameter: 12, volume: 0.084},
                            {id: 3, diameter: 16, volume: 0.18},
                            {id: 4, diameter: 20, volume: 0.30},
                            {id: 5, diameter: 24, volume: 0.46},
                            {id: 6, diameter: 28, volume: 0.64},
                            {id: 7, diameter: 32, volume: 0.87},
                            {id: 8, diameter: 36, volume: 1.13},
                            {id: 9, diameter: 40, volume: 1.42},
                            {id: 10, diameter: 44, volume: 1.74},
                            {id: 11, diameter: 48, volume: 2.10},
                            {id: 12, diameter: 52, volume: 2.48},
                            {id: 13, diameter: 56, volume: 2.90},
                        ]
                    },
                    {
                        id: 3,
                        breed: 'Сосна',
                        category: 5,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.031},
                            {id: 2, diameter: 12, volume: 0.087},
                            {id: 3, diameter: 16, volume: 0.17},
                            {id: 4, diameter: 20, volume: 0.28},
                            {id: 5, diameter: 24, volume: 0.43},
                            {id: 6, diameter: 28, volume: 0.61},
                            {id: 7, diameter: 32, volume: 0.81},
                            {id: 8, diameter: 36, volume: 1.04},
                            {id: 9, diameter: 40, volume: 1.32},
                            {id: 10, diameter: 44, volume: 1.61},
                            {id: 11, diameter: 48, volume: 1.91},
                            {id: 12, diameter: 52, volume: 2.21},
                        ]
                    },
                    {
                        id: 4,
                        breed: 'Ольха чёрная',
                        category: 5,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.028},
                            {id: 2, diameter: 12, volume: 0.081},
                            {id: 3, diameter: 16, volume: 0.17},
                            {id: 4, diameter: 20, volume: 0.28},
                            {id: 5, diameter: 24, volume: 0.43},
                            {id: 6, diameter: 28, volume: 0.61},
                            {id: 7, diameter: 32, volume: 0.82},
                            {id: 8, diameter: 36, volume: 1.06},
                            {id: 9, diameter: 40, volume: 1.33},
                            {id: 10, diameter: 44, volume: 1.65},
                            {id: 11, diameter: 48, volume: 1.97},
                            {id: 12, diameter: 52, volume: 2.29},
                        ]
                    },
                ]
            }, 
        ]
    },
    {
        id: 2,
        section_name: 'Редко используемые',
        section_data: [
            {   
                id: 1,
                group_name: '1 разряд',
                group_data: [
                    {
                        id: 1,
                        breed: 'Берёза',
                        category: 1,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.036},
                            {id: 2, diameter: 12, volume: 0.114},
                            {id: 3, diameter: 16, volume: 0.23},
                            {id: 4, diameter: 20, volume: 0.40},
                            {id: 5, diameter: 24, volume: 0.61},
                            {id: 6, diameter: 28, volume: 0.87},
                            {id: 7, diameter: 32, volume: 1.17},
                            {id: 8, diameter: 36, volume: 1.52},
                            {id: 9, diameter: 40, volume: 1.89},
                            {id: 10, diameter: 44, volume: 2.31},
                            {id: 11, diameter: 48, volume: 2.77},
                            {id: 12, diameter: 52, volume: 3.23},
                        ]
                    },
                    {
                        id: 2,
                        breed: 'Ольха чёрная',
                        category: 1,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.036},
                            {id: 2, diameter: 12, volume: 0.114},
                            {id: 3, diameter: 16, volume: 0.23},
                            {id: 4, diameter: 20, volume: 0.40},
                            {id: 5, diameter: 24, volume: 0.61},
                            {id: 6, diameter: 28, volume: 0.87},
                            {id: 7, diameter: 32, volume: 1.17},
                            {id: 8, diameter: 36, volume: 1.52},
                            {id: 9, diameter: 40, volume: 1.89},
                            {id: 10, diameter: 44, volume: 2.31},
                            {id: 11, diameter: 48, volume: 2.77},
                            {id: 12, diameter: 52, volume: 3.23},
                        ]
                    },
                ]
            },
            {   
                id: 2,
                group_name: '2 разряд',
                group_data: [
                    {
                        id: 1,
                        breed: 'Берёза',
                        category: 2,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.034},
                            {id: 2, diameter: 12, volume: 0.104},
                            {id: 3, diameter: 16, volume: 0.22},
                            {id: 4, diameter: 20, volume: 0.37},
                            {id: 5, diameter: 24, volume: 0.56},
                            {id: 6, diameter: 28, volume: 0.80},
                            {id: 7, diameter: 32, volume: 1.08},
                            {id: 8, diameter: 36, volume: 1.38},
                            {id: 9, diameter: 40, volume: 1.73},
                            {id: 10, diameter: 44, volume: 2.11},
                            {id: 11, diameter: 48, volume: 2.53},
                            {id: 12, diameter: 52, volume: 2.95},
                        ]
                    },
                    {
                        id: 2,
                        breed: 'Осина',
                        category: 2,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.038},
                            {id: 2, diameter: 12, volume: 0.106},
                            {id: 3, diameter: 16, volume: 0.21},
                            {id: 4, diameter: 20, volume: 0.36},
                            {id: 5, diameter: 24, volume: 0.55},
                            {id: 6, diameter: 28, volume: 0.78},
                            {id: 7, diameter: 32, volume: 1.06},
                            {id: 8, diameter: 36, volume: 1.35},
                            {id: 9, diameter: 40, volume: 1.70},
                            {id: 10, diameter: 44, volume: 2.06},
                            {id: 11, diameter: 48, volume: 2.46},
                            {id: 12, diameter: 52, volume: 2.86},
                        ]
                    },
                    {
                        id: 3,
                        breed: 'Ель',
                        category: 2,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.036},
                            {id: 2, diameter: 12, volume: 0.110},
                            {id: 3, diameter: 16, volume: 0.23},
                            {id: 4, diameter: 20, volume: 0.39},
                            {id: 5, diameter: 24, volume: 0.60},
                            {id: 6, diameter: 28, volume: 0.86},
                            {id: 7, diameter: 32, volume: 1.17},
                            {id: 8, diameter: 36, volume: 1.52},
                            {id: 9, diameter: 40, volume: 1.90},
                            {id: 10, diameter: 44, volume: 2.35},
                            {id: 11, diameter: 48, volume: 2.81},
                            {id: 12, diameter: 52, volume: 3.32},
                            {id: 13, diameter: 56, volume: 3.87},
                        ]
                    },
                    {
                        id: 4,
                        breed: 'Ольха чёрная',
                        category: 2,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.034},
                            {id: 2, diameter: 12, volume: 0.104},
                            {id: 3, diameter: 16, volume: 0.22},
                            {id: 4, diameter: 20, volume: 0.37},
                            {id: 5, diameter: 24, volume: 0.56},
                            {id: 6, diameter: 28, volume: 0.80},
                            {id: 7, diameter: 32, volume: 1.08},
                            {id: 8, diameter: 36, volume: 1.38},
                            {id: 9, diameter: 40, volume: 1.73},
                            {id: 10, diameter: 44, volume: 2.11},
                            {id: 11, diameter: 48, volume: 2.53},
                            {id: 12, diameter: 52, volume: 2.95},
                        ]
                    },
                    {
                        id: 5,
                        breed: 'Ольха серая',
                        category: 2,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.038},
                            {id: 2, diameter: 12, volume: 0.106},
                            {id: 3, diameter: 16, volume: 0.21},
                            {id: 4, diameter: 20, volume: 0.36},
                            {id: 5, diameter: 24, volume: 0.55},
                            {id: 6, diameter: 28, volume: 0.78},
                            {id: 7, diameter: 32, volume: 1.06},
                            {id: 8, diameter: 36, volume: 1.35},
                            {id: 9, diameter: 40, volume: 1.70},
                            {id: 10, diameter: 44, volume: 2.06},
                            {id: 11, diameter: 48, volume: 2.46},
                            {id: 12, diameter: 52, volume: 2.86},
                        ]
                    },
                ]
            },
            {   
                id: 3,
                group_name: '6 разряд',
                group_data: [
                    {
                        id: 1,
                        breed: 'Сосна',
                        category: 6,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.029},
                            {id: 2, diameter: 12, volume: 0.080},
                            {id: 3, diameter: 16, volume: 0.16},
                            {id: 4, diameter: 20, volume: 0.26},
                            {id: 5, diameter: 24, volume: 0.40},
                            {id: 6, diameter: 28, volume: 0.57},
                            {id: 7, diameter: 32, volume: 0.76},
                            {id: 8, diameter: 36, volume: 0.98},
                            {id: 9, diameter: 40, volume: 1.23},
                            {id: 10, diameter: 44, volume: 1.48},
                            {id: 11, diameter: 48, volume: 1.80},
                            {id: 12, diameter: 52, volume: 2.12},
                        ]
                    },
                    {
                        id: 2,
                        breed: 'Берёза',
                        category: 6,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.026},
                            {id: 2, diameter: 12, volume: 0.074},
                            {id: 3, diameter: 16, volume: 0.15},
                            {id: 4, diameter: 20, volume: 0.26},
                            {id: 5, diameter: 24, volume: 0.38},
                            {id: 6, diameter: 28, volume: 0.54},
                            {id: 7, diameter: 32, volume: 0.71},
                            {id: 8, diameter: 36, volume: 0.91},
                            {id: 9, diameter: 40, volume: 1.16},
                            {id: 10, diameter: 44, volume: 1.43},
                            {id: 11, diameter: 48, volume: 1.75},
                            {id: 12, diameter: 52, volume: 2.07},
                        ]
                    },
                    {
                        id: 3,
                        breed: 'Ель',
                        category: 6,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.024},
                            {id: 2, diameter: 12, volume: 0.075},
                            {id: 3, diameter: 16, volume: 0.16},
                            {id: 4, diameter: 20, volume: 0.27},
                            {id: 5, diameter: 24, volume: 0.40},
                            {id: 6, diameter: 28, volume: 0.58},
                            {id: 7, diameter: 32, volume: 0.77},
                            {id: 8, diameter: 36, volume: 1.01},
                            {id: 9, diameter: 40, volume: 1.26},
                            {id: 10, diameter: 44, volume: 1.56},
                            {id: 11, diameter: 48, volume: 1.87},
                            {id: 12, diameter: 52, volume: 2.22},
                            {id: 13, diameter: 56, volume: 2.61},
                        ]
                    },
                    {
                        id: 4,
                        breed: 'Ольха чёрная',
                        category: 6,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.026},
                            {id: 2, diameter: 12, volume: 0.074},
                            {id: 3, diameter: 16, volume: 0.15},
                            {id: 4, diameter: 20, volume: 0.26},
                            {id: 5, diameter: 24, volume: 0.38},
                            {id: 6, diameter: 28, volume: 0.54},
                            {id: 7, diameter: 32, volume: 0.71},
                            {id: 8, diameter: 36, volume: 0.91},
                            {id: 9, diameter: 40, volume: 1.16},
                            {id: 10, diameter: 44, volume: 1.43},
                            {id: 11, diameter: 48, volume: 1.75},
                            {id: 12, diameter: 52, volume: 2.07},
                        ]
                    },
                ]
            },
            {   
                id: 4,
                group_name: '7 разряд',
                group_data: [
                    {
                        id: 1,
                        breed: 'Сосна',
                        category: 7,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.027},
                            {id: 2, diameter: 12, volume: 0.074},
                            {id: 3, diameter: 16, volume: 0.15},
                            {id: 4, diameter: 20, volume: 0.25},
                            {id: 5, diameter: 24, volume: 0.38},
                            {id: 6, diameter: 28, volume: 0.54},
                            {id: 7, diameter: 32, volume: 0.72},
                            {id: 8, diameter: 36, volume: 0.92},
                            {id: 9, diameter: 40, volume: 1.14},
                            {id: 10, diameter: 44, volume: 1.41},
                            {id: 11, diameter: 48, volume: 1.72},
                            {id: 12, diameter: 52, volume: 2.03},
                        ]
                    },
                    {
                        id: 2,
                        breed: 'Ель',
                        category: 7,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.022},
                            {id: 2, diameter: 12, volume: 0.068},
                            {id: 3, diameter: 16, volume: 0.14},
                            {id: 4, diameter: 20, volume: 0.24},
                            {id: 5, diameter: 24, volume: 0.36},
                            {id: 6, diameter: 28, volume: 0.52},
                            {id: 7, diameter: 32, volume: 0.70},
                            {id: 8, diameter: 36, volume: 0.90},
                            {id: 9, diameter: 40, volume: 1.13},
                            {id: 10, diameter: 44, volume: 1.39},
                            {id: 11, diameter: 48, volume: 1.67},
                            {id: 12, diameter: 52, volume: 1.98},
                            {id: 13, diameter: 56, volume: 2.39},
                        ]
                    },
                ]
            },
            {   
                id: 5,
                group_name: '8 разряд',
                group_data: [
                    {
                        id: 1,
                        breed: 'Ель',
                        category: 8,
                        cubatures: [
                            {id: 1, diameter: 8, volume: 0.019},
                            {id: 2, diameter: 12, volume: 0.060},
                            {id: 3, diameter: 16, volume: 0.13},
                            {id: 4, diameter: 20, volume: 0.21},
                            {id: 5, diameter: 24, volume: 0.33},
                            {id: 6, diameter: 28, volume: 0.46},
                            {id: 7, diameter: 32, volume: 0.62},
                            {id: 8, diameter: 36, volume: 0.80},
                            {id: 9, diameter: 40, volume: 1.01},
                            {id: 10, diameter: 44, volume: 1.24},
                            {id: 11, diameter: 48, volume: 1.50},
                            {id: 12, diameter: 52, volume: 1.82},
                            {id: 13, diameter: 56, volume: 2.11},
                        ]
                    },
                ]
            },
        ]
    },       
  ]

  const change_el_val = (breed, volume, diameter, action, category) => {
      const newRecord = { diameter: diameter, number: 1 };

      if (action === 'add') {
          setEl(prevIsEl => prevIsEl + volume);
          setKol(prevIsKol => prevIsKol + 1);
          setHistory(prevTrees => 
            prevTrees.map(tree => 
                tree.breed === breed 
                    ? {
                        ...tree, 
                        category: category,
                        data: tree.data.some(item => item.diameter === newRecord.diameter) 
                            ? tree.data.map(item => 
                                item.diameter === newRecord.diameter 
                                    ? { ...item, number: String(Number(item.number) + 1) }
                                    : item
                              )
                            : [...tree.data, newRecord]
                    }
                    : tree
            )
          );
      } else if (action === 'delete') {
          setEl(prevIsEl => prevIsEl - volume);
          setKol(prevIsKol => prevIsKol - 1);
          setHistory(prevTrees => 
            prevTrees.map(tree => 
                tree.breed === breed
                    ? {
                        ...tree,
                        category: category,
                        data: tree.data.some(item => item.diameter === newRecord.diameter)
                            ? tree.data.map(item =>
                                item.diameter === newRecord.diameter
                                    ? { ...item, number: String(Number(item.number) - 1) } 
                                    : item
                              ).filter(item => Number(item.number) > 0) // Фильтруем записи, чтобы удалить те, у кого number стал 0
                            : [...tree.data, newRecord]
                    }
                    : tree
            )
          );
      }
  }

  const refresh = () => {
    setEl(0);
    setKol(0);

    setHistory([
        {
            breed: 'Осина', 
            category: undefined,
            data: []
        },
        {
            breed: 'Берёза', 
            category: undefined,
            data: []
        },
        {
            breed: 'Ольха серая', 
            category: undefined,
            data: []
        },
        {
            breed: 'Ольха чёрная', 
            category: undefined,
            data: []
        },
        {
            breed: 'Ель', 
            category: undefined,
            data: []
        },
        {
            breed: 'Сосна', 
            category: undefined,
            data: []
        },
      ]);
  }
  
  // сделать так, чтобы каждый клик добавлял в маассив инфу и эта инфа отображалась
  // структура { breed: '', diameter: '' }

  return (
    <div className="uk-container">
      {/* Фиксированная верхняя панель */}
      <div className="uk-card uk-card-default uk-margin-top uk-sticky uk-sticky-top" uk-sticky="top: 0; offset: 0">
        <div className="uk-card-body" style={{ height: '100%' }}>
          <div className='uk-margin-small-bottom'>
            <h3>Сумма объёмов стволов в коре</h3>
          </div>
          <div>
            <div className='uk-margin-bottom'>
                Запас, кбм.: <span className='uk-badge'>{isEl.toFixed(0) == '-0' ? 0 : isEl.toFixed(0)}</span>
            </div>
            <div className='uk-margin-bottom'>
                <button onClick={refresh}>
                    Обнулить
                </button>
            </div>
            <div>
                {isHistory.map(breed_data => breed_data.data.length > 0 
                    &&
                        <div className='uk-margin-bottom'>
                            {breed_data.category} разряд - {breed_data.breed} - {
                                breed_data.data.map(element => 
                                    <>
                                        {element.diameter} (<b>{element.number}</b>), 
                                    </>
                                )}
                        </div>
                )}
            </div>
            <div>
                {
                    isKol > 0 && 
                        <div>
                            Число деревьев: <span className='uk-badge'>{isKol}</span>
                        </div>
                }
            </div>
          </div>
        </div>
      </div>

      {/* Контент страницы */}
      <div className="uk-grid" uk-grid>
        <div className="uk-width-1-1">
          <div 
            className="content-section" 
            style={{ height: '100%', padding: '20px' }}
          >
            <ul uk-accordion="collapsible: false">
                {
                    cubatureData.map(section => (
                        <li>
                            <a className="uk-accordion-title uk-text-bold" href>{section.section_name}</a>
                            <div className="uk-accordion-content">
                                <ul uk-accordion="collapsible: false">
                                    {section.section_data.map(group => (
                                        <li>
                                            <a className="uk-accordion-title" href>{group.group_name}</a>
                                            <div className="uk-accordion-content">
                                                <ul uk-accordion="collapsible: false">
                                                    {group.group_data.map(el => (
                                                        <CubatureCalculationBlock 
                                                            key={el.id}
                                                            handlerClick={change_el_val} 
                                                            cubatureData={el} 
                                                            isHistory={isHistory} 
                                                        />
                                                    ))}
                                                </ul>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))
                }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CubatureCalculation;