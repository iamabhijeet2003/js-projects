import { differenceInYears, differenceInMonths, differenceInDays, parseISO } from 'date-fns';

document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the date of birth from the input
    const dob = document.getElementById('dob').value;

    if (dob) {
        // Calculate the age in years, months, and days
        const age = calculateDetailedAge(dob);

        // Display the result
        document.getElementById('result').textContent = `You are ${age.years} years, ${age.months} months, and ${age.days} days old.`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid date.';
    }
});

function calculateDetailedAge(dateOfBirth) {
    const birthDate = parseISO(dateOfBirth);
    const currentDate = new Date();

    // Calculate the difference in years
    let years = differenceInYears(currentDate, birthDate);

    // Calculate the difference in months
    let months = differenceInMonths(currentDate, birthDate) % 12;

    // Calculate the difference in days
    const days = differenceInDays(currentDate, new Date(currentDate.getFullYear(), currentDate.getMonth() - months, currentDate.getDate())) % 30;

    // Adjust months and years if necessary
    if (days < 0) {
        months--;
        days += 30;
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}
