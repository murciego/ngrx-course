import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Course, compareCourses } from "../model/course";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { allCoursesLoaded } from "../course.actions";

export interface CoursesState  extends EntityState<Course>{
    allCoursesLoaded: boolean
    
    
    // Formato Antiguo
    // courses: Course[];

    // Formato manual
    // // Una entidad que tiene claves tipo numero para datos tipo Course
    // entities: {[key: number]:Course},
    // // Array auxiliar de ids para el mapa de entidades "seqNo"
    // ids: number[],
}

export const adapter = createEntityAdapter<Course>({
    sortComparer: compareCourses,
    // selectId: course => course.id
});


export const initialCoursesState =  adapter.getInitialState({
    allCoursesLoaded: false
});

export const coursesReducer = createReducer(
    initialCoursesState,
    on(CourseActions.allCoursesLoaded, (state, action) => adapter.setAll(action.courses, {...state, allCoursesLoaded: true})),
    on(CourseActions.courseUpdate, (state, action) => adapter.updateOne(action.update, state))
)

export const {
    selectAll
} = adapter.getSelectors();

