export function getExperience() {
    const startCourse = new Date(2021, 5, 1);
    const start = startCourse.valueOf();
    const today = new Date();
    const months = 1000 * 3600 * 24 * 30;
    return Math.round((today - start) / months);
}
