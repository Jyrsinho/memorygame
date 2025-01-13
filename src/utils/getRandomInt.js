/**
 * Generates a random integer between min and max values
 * @param min minimum value
 * @param max maximum value
 */
export default function getRandomInt(min, max)   {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
