const quizzesDao = require("../../daos/quizzes-dao")

// const quizzes = require("./quizzes.json")

// const quizzesModel = require("../../models/quizzes/quizzes-model")

const createQuiz = () => {}

const findAllQuizzes = () => {
    return quizzesDao.findAllQuizzes();
    // return quizzesModel.find()
    // return quizzes
}

const findQuizById = (qid) => {
    return quizzesDao.findQuizById(qid)
    // return quizzesModel.findById(qid)
    //     .populate("questions")
    //     .exec()
    // return quizzesModel.find({_id: qid})
    // return quizzes.find((quiz) => {
    //     return (quiz._id === qid)
    // })
}

const updateQuiz = () => {}

const deleteQuiz = () => {}

module.exports = {
    createQuiz, findAllQuizzes, findQuizById, updateQuiz, deleteQuiz
}