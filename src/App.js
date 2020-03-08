import React, {Component} from 'react';
import Layout from "./hoc/Layout/Layout";
import { Route, Switch} from "react-router-dom";
import Quiz from "./containers/quiz/Quiz";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/auth";
import QuizCreator from "./containers/QuizzCreator/QuizzCreator";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch >
                        <Route path="/auth" component={Auth} />
                        <Route path="/quiz-creator" component={QuizCreator}/>
                        <Route path="/quiz/:id" component={Quiz}/>
                        <Route path="/" component={QuizList} />
                    </Switch>
                </Layout>
                <div>
                    
                </div>
            </div>

        );
    };
};

export default App;
