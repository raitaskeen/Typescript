"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
function calculateAge(birthYear, currentYear) {
    const secondsInMinute = 60;
    const minutesInHour = 60;
    const hoursInDay = 24;
    const daysInMonth = 30;
    const monthsInYear = 12;
    const ageInYears = currentYear - birthYear;
    const ageInMonths = ageInYears * monthsInYear;
    const ageInDays = ageInYears * daysInMonth * monthsInYear;
    const ageInHours = ageInDays * hoursInDay;
    const ageInSeconds = ageInHours * minutesInHour * secondsInMinute;
    return {
        years: ageInYears,
        months: ageInMonths,
        days: ageInDays,
        hours: ageInHours,
        seconds: ageInSeconds,
    };
}
function displayResult(birthYear, currentYear) {
    const age = calculateAge(birthYear, currentYear);
    console.log(`Your age is:`);
    console.log(`Years: ${age.years}`);
    console.log(`Months: ${age.months}`);
    console.log(`Days: ${age.days}`);
    console.log(`Hours: ${age.hours}`);
    console.log(`Seconds: ${age.seconds}`);
}
const birthYearString = readlineSync.question('Enter your birth year: ');
const birthYear = parseInt(birthYearString);
const currentYear = new Date().getFullYear();
displayResult(birthYear, currentYear);
