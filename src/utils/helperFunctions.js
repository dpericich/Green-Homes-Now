export const calculateQuizScore = (array) => {
    const POSSIBLE_POINTS = 36;
    const sum = array.reduce((cv, ac) => ac += cv, 0)
    const score = Math.round((sum / POSSIBLE_POINTS) * 5)

    return score;
}