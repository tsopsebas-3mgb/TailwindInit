import {type Movie} from '../Types/movie';
import {type Ref, ref} from "vue";

export const favourites: Ref<Movie[]> = ref([]);