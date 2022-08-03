import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";


export const quizSlice = createSlice({
    name: "quizzes",
    initialState: {
        quiz: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state.quiz[id] ={
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            };
      
        }}

});
export const quizSliceThunk = (quiz) => {
    const { topicId, id } = quiz;
    return (dispatch) => {
        dispatch(quizSlice.actions.addQuiz(quiz))
        dispatch(addQuizId({ topicId: topicId, quizId: id }))
    }
}



export const selectQuiz = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizSlice.actions;
export default quizSlice.reducer;