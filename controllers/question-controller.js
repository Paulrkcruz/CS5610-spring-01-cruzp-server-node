const questionsService = require("../services/questions/question-service")

module.exports = (app) => {

    // /api/questions
    const findAllQuestions = (req, res) => {
        // const questions = questionsService.findAllQuestions()
        questionsService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
        // res.send(questions)
    }

    // /api/quizzes/:qzid/questions
    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.qzid
        // const questions = questionsService.findQuestionsForQuiz(quizId)
        const questions = questionsService
            .findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.send(questions)
            })
        // res.send(questions)
    }

    const findQuestionById = (req, res) => {
        questionsService.findQuestionById()
            .then((questions) => {
                res.send(questions)
            })
    }

    app.get("/api/questions", findAllQuestions)
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz)
    app.get('/api/questions/:qid', findQuestionById)
}