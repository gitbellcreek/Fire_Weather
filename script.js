document.addEventListener('DOMContentLoaded', () => {
    // --- DATA TABLES ---

    const table1 = {
        "10-29": [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 8, 9, 9, 10, 11, 12, 12, 13, 13, 14],
        "30-49": [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 7, 8, 9, 9, 10, 10, 11, 12, 13, 13, 13],
        "50-69": [1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 12, 12, 12, 13],
        "70-89": [1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 8, 9, 10, 10, 11, 12, 12, 13],
        "90-109": [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 8, 8, 9, 10, 10, 11, 12, 12, 13],
        "109+": [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 8, 8, 9, 10, 10, 11, 12, 12, 12]
    };

    const table2A = { // May, June, July
        unshaded: {
            N: { "0-30": [2, 1, 0, 0, 1, 2], "31%+": [3, 1, 0, 0, 1, 3] },
            E: { "0-30": [2, 1, 0, 1, 2, 3], "31%+": [2, 1, 0, 1, 3, 4] },
            S: { "0-30": [2, 1, 0, 0, 1, 2], "31%+": [3, 1, 0, 0, 1, 3] },
            W: { "0-30": [2, 1, 0, 0, 1, 2], "31%+": [4, 2, 1, 0, 1, 2] },
            All: { "5°+": [4, 3, 3, 3, 4, 5] }
        },
        shaded: {
            N: { "0-30": [3, 1, 0, 0, 1, 3], "31%+": [4, 2, 1, 1, 2, 4] },
            E: { "0-30": [3, 1, 1, 2, 3, 4], "31%+": [3, 1, 1, 2, 4, 5] },
            S: { "0-30": [3, 1, 1, 1, 2, 3], "31%+": [3, 2, 1, 1, 2, 3] },
            W: { "0-30": [5, 3, 1, 0, 1, 2], "31%+": [6, 4, 2, 1, 1, 3] },
            All: { "5°+": [5, 4, 3, 3, 4, 5] }
        }
    };

    const table2B = { // Feb, Mar, Apr, Aug, Sep, Oct
        unshaded: {
            N: { "0-30": [3, 3, 2, 2, 3, 4], "31%+": [4, 3, 2, 3, 4, 5] },
            E: { "0-30": [3, 1, 1, 2, 4, 5], "31%+": [3, 2, 1, 3, 4, 6] },
            S: { "0-30": [3, 2, 1, 1, 2, 3], "31%+": [4, 2, 1, 1, 2, 4] },
            W: { "0-30": [4, 3, 1, 1, 2, 3], "31%+": [5, 3, 2, 1, 3, 4] },
            All: { "5°+": [5, 4, 4, 4, 5, 6] }
        },
        shaded: {
            N: { "0-30": [4, 3, 3, 3, 4, 5], "31%+": [5, 4, 4, 4, 5, 6] },
            E: { "0-30": [4, 2, 2, 3, 5, 6], "31%+": [5, 2, 2, 4, 5, 6] },
            S: { "0-30": [4, 2, 1, 1, 3, 4], "31%+": [5, 2, 1, 1, 3, 5] },
            W: { "0-30": [5, 4, 2, 1, 3, 4], "31%+": [6, 4, 3, 1, 3, 5] },
            All: { "5°+": [6, 5, 4, 5, 5, 6] }
        }
    };

    const table2C = { // Nov, Dec, Jan
        unshaded: {
            N: { "0-30": [4, 4, 4, 4, 5, 6], "31%+": [5, 5, 5, 5, 6, 6] },
            E: { "0-30": [4, 2, 3, 4, 5, 6], "31%+": [4, 3, 3, 4, 5, 6] },
            S: { "0-30": [4, 3, 2, 2, 3, 5], "31%+": [5, 3, 2, 2, 4, 6] },
            W: { "0-30": [4, 5, 3, 2, 3, 4], "31%+": [5, 5, 4, 3, 4, 5] },
            All: { "5°+": [5, 5, 5, 5, 6, 6] }
        },
        shaded: {
            N: { "0-30": [5, 5, 5, 5, 6, 6], "31%+": [6, 6, 6, 6, 6, 6] },
            E: { "0-30": [5, 4, 4, 5, 6, 6], "31%+": [6, 4, 4, 5, 6, 6] },
            S: { "0-30": [5, 3, 2, 3, 4, 6], "31%+": [6, 4, 3, 3, 5, 6] },
            W: { "0-30": [5, 5, 4, 3, 4, 5], "31%+": [6, 6, 5, 4, 5, 6] },
            All: { "5°+": [6, 6, 6, 6, 6, 6] }
        }
    };

    const table3A = { // Unshaded
        "110+":    [100, 100, 80, 70, 60, 60, 50, 40, 40, 30, 30, 20, 20, 10, 10, 10],
        "100-109": [100, 90, 80, 70, 60, 60, 50, 40, 40, 30, 30, 20, 20, 20, 10, 10],
        "90-99":   [100, 90, 80, 70, 60, 50, 40, 40, 30, 30, 30, 20, 20, 20, 10, 10],
        "80-89":   [100, 90, 80, 70, 60, 50, 40, 40, 30, 30, 20, 20, 20, 10, 10, 10],
        "70-79":   [100, 80, 70, 60, 60, 50, 40, 40, 30, 30, 20, 20, 20, 10, 10, 10],
        "60-69":   [90, 80, 70, 60, 50, 50, 40, 30, 30, 20, 20, 20, 20, 10, 10, 10],
        "50-59":   [90, 80, 70, 60, 50, 40, 40, 30, 30, 20, 20, 20, 10, 10, 10, 10],
        "40-49":   [90, 80, 70, 60, 50, 40, 40, 30, 30, 20, 20, 20, 10, 10, 10, 10],
        "30-39":   [80, 70, 60, 50, 50, 40, 30, 30, 20, 20, 20, 10, 10, 10, 10, 10]
    };

    const table3B = { // Shaded
        "110+":    [100, 90, 80, 70, 60, 50, 50, 40, 40, 30, 30, 20, 20, 20, 10, 10],
        "100-109": [100, 90, 80, 70, 60, 50, 50, 40, 30, 30, 30, 20, 20, 20, 10, 10],
        "90-99":   [100, 90, 80, 70, 60, 50, 40, 40, 30, 30, 20, 20, 20, 10, 10, 10],
        "80-89":   [100, 80, 70, 60, 60, 50, 40, 40, 30, 30, 20, 20, 20, 10, 10, 10],
        "70-79":   [90, 80, 70, 60, 50, 50, 40, 30, 30, 30, 20, 20, 20, 10, 10, 10],
        "60-69":   [90, 80, 70, 60, 50, 40, 40, 30, 30, 20, 20, 20, 10, 10, 10, 10],
        "50-59":   [90, 80, 70, 60, 50, 40, 40, 30, 30, 20, 20, 20, 10, 10, 10, 10],
        "40-49":   [90, 80, 60, 50, 50, 40, 30, 30, 30, 20, 20, 20, 10, 10, 10, 10],
        "30-39":   [80, 80, 60, 50, 50, 40, 30, 30, 20, 20, 10, 10, 10, 10, 10, 10]
    };

    // --- HELPER FUNCTIONS ---

    // Get temperature range for Table 1 and 3
    function getTempRange(temp) {
        if (temp >= 109) return temp > 109 ? "109+" : "90-109";
        if (temp >= 90) return "90-109";
        if (temp >= 70) return "70-89";
        if (temp >= 50) return "50-69";
        if (temp >= 30) return "30-49";
        if (temp >= 10) return "10-29";
        return null;
    }

    function getTempRangePIG(temp) {
        if (temp >= 110) return "110+";
        if (temp >= 100) return "100-109";
        if (temp >= 90) return "90-99";
        if (temp >= 80) return "80-89";
        if (temp >= 70) return "70-79";
        if (temp >= 60) return "60-69";
        if (temp >= 50) return "50-59";
        if (temp >= 40) return "40-49";
        if (temp >= 30) return "30-39";
        return null;
    }


    // Get RH index for Table 1
    function getRhIndex(rh) {
        if (rh > 100) rh = 100;
        if (rh < 0) rh = 0;
        return Math.floor(rh / 5);
    }

    // Get time index for Table 2
    function getTimeIndex(time) { // e.g., "13:00"
        const hour = parseInt(time.split(':')[0]);
        if (hour >= 8 && hour < 10) return 0;
        if (hour >= 10 && hour < 12) return 1;
        if (hour >= 12 && hour < 14) return 2;
        if (hour >= 14 && hour < 16) return 3;
        if (hour >= 16 && hour < 18) return 4;
        if (hour >= 18 && hour < 20) return 5;
        return -1; // Out of range
    }

    function getFFMIndex(ffm) {
        if (ffm < 2) ffm = 2;
        if (ffm > 17) ffm = 17;
        return ffm - 2;
    }


    // --- MAIN CALCULATION LOGIC ---
    document.getElementById('weather-form').addEventListener('submit', function(e) {
        e.preventDefault();

        // --- GET USER INPUT ---
        const dryBulbTemp = parseInt(document.getElementById('dry-bulb-temp').value);
        const rh = parseInt(document.getElementById('rh').value);
        const avgWindSpeed = document.getElementById('avg-wind-speed').value;
        const maxWindSpeed = document.getElementById('max-wind-speed').value;
        const dateValue = document.getElementById('date').value;
        const timeValue = document.getElementById('time').value;
        const locationName = document.getElementById('location').value;
        const windDirection = document.getElementById('wind-direction').value;
        const cloudCover = document.getElementById('cloud-cover').value;
        const aspect = document.getElementById('aspect').value;
        const slope = parseInt(document.getElementById('slope').value);
        const prevHourTemp = document.getElementById('prev-hour-temp').value;
        const prevHourRh = document.getElementById('prev-hour-rh').value;

        // --- CALCULATIONS ---

        // Step A: Reference Fuel Moisture
        const tempRange1 = getTempRange(dryBulbTemp);
        const rhIndex = getRhIndex(rh);
        const refFuelMoisture = tempRange1 ? table1[tempRange1][rhIndex] : 'N/A';

        // Step B: FFM Correction
        const month = new Date(dateValue).getMonth() + 1; // getMonth() is 0-indexed
        let table2;
        if (month >= 5 && month <= 7) table2 = table2A;
        else if ([2, 3, 4, 8, 9, 10].includes(month)) table2 = table2B;
        else table2 = table2C;

        const timeIndex = getTimeIndex(timeValue);
        const slopeCategory = slope <= 30 ? "0-30" : "31%+";

        let shadedCorrection, unshadedCorrection;
        const SLOPE_DEGREES_5_IN_PERCENT = 8.75;

        if (timeIndex !== -1) {
            let aspectToUse = aspect;
            let slopeCategoryToUse = slopeCategory;

            // Per the code review, if slope is > 5 degrees (8.75%), use the "All" aspect row.
            if (slope >= SLOPE_DEGREES_5_IN_PERCENT) {
                aspectToUse = 'All';
                slopeCategoryToUse = '5°+';
            }

            unshadedCorrection = table2.unshaded[aspectToUse][slopeCategoryToUse][timeIndex];
            shadedCorrection = table2.shaded[aspectToUse][slopeCategoryToUse][timeIndex];
        } else {
            unshadedCorrection = shadedCorrection = 'N/A (Time out of range)';
        }


        // Step C: Calculate Final FFM
        const shadedFFM = refFuelMoisture + shadedCorrection;
        const unshadedFFM = refFuelMoisture + unshadedCorrection;

        // Step D: Calculate PIG
        const tempRange3 = getTempRangePIG(dryBulbTemp);
        const shadedFFMIndex = getFFMIndex(shadedFFM);
        const unshadedFFMIndex = getFFMIndex(unshadedFFM);

        const shadedPIG = tempRange3 !== null ? table3B[tempRange3][shadedFFMIndex] : 'N/A';
        const unshadedPIG = tempRange3 !== null ? table3A[tempRange3][unshadedFFMIndex] : 'N/A';


        // Step E: Generate Output
        const fullDate = new Date(dateValue + 'T' + timeValue);
        const formattedDate = `${fullDate.toLocaleString('default', { month: 'short' })} ${fullDate.getDate()}, ${fullDate.getFullYear()}`;
        const formattedTime = fullDate.toTimeString().substring(0, 5);

        const logOutput = `
Location: ${locationName}
Date: ${formattedDate}
Time: ${formattedTime}
---
Dry Bulb Temp: ${dryBulbTemp}°F
Relative Humidity: ${rh}%
Avg Wind Speed: ${avgWindSpeed} mph
Max Wind Speed: ${maxWindSpeed} mph
Wind Direction: ${windDirection}
Cloud Cover: ${cloudCover}%
---
CALCULATIONS:
Reference Fuel Moisture (Table 1): ${refFuelMoisture}%
Shaded Correction (Table 2): +${shadedCorrection}%
Unshaded Correction (Table 2): +${unshadedCorrection}%
---
FINAL VALUES:
Shaded FFM: ${shadedFFM}%
Unshaded FFM: ${unshadedFFM}%
Shaded PIG: ${shadedPIG}%
Unshaded PIG: ${unshadedPIG}%
`;

        const radioOutput = `
"Weather for [Your Location/Unit], ${formattedDate} at ${formattedTime}."
"Temp ${dryBulbTemp}, RH ${rh}."
"Wind ${windDirection} at ${avgWindSpeed}, gusts to ${maxWindSpeed}."
"Shaded FFM is ${shadedFFM} percent, PIG is ${shadedPIG} percent."
"Unshaded FFM is ${unshadedFFM} percent, PIG is ${unshadedPIG} percent."
`;

        // --- DISPLAY RESULTS ---
        document.getElementById('log-output').textContent = logOutput.trim();
        document.getElementById('radio-output').textContent = radioOutput.trim();
        document.getElementById('results').classList.remove('hidden');
    });

    // --- SMILEY FACE ANIMATION ---

    // Create the smiley element
    const smiley = document.createElement('div');
    smiley.classList.add('smiley');
    document.body.appendChild(smiley);

    const inputs = document.querySelectorAll('input, select');

    inputs.forEach(input => {
        input.addEventListener('focus', (e) => {
            const rect = e.target.getBoundingClientRect();
            smiley.style.display = 'block';
            smiley.style.top = `${window.scrollY + rect.top - 35}px`; // Position above the input
            smiley.style.left = `${window.scrollX + rect.left + (rect.width / 2) - 15}px`; // Center horizontally
            smiley.classList.add('bounce');

            // Remove the class after the animation finishes to allow re-triggering
            setTimeout(() => {
                smiley.classList.remove('bounce');
            }, 600);
        });

        input.addEventListener('blur', () => {
            smiley.style.display = 'none';
        });
    });
});
