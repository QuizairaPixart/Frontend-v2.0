import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Index from './Features/Index/View/Index'

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Index />}/>
    )
)