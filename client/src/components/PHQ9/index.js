import React, { Component } from "react";
import * as Survey from "survey-react"

class PHQ9 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.oncompleteComponent = this.oncompleteComponent.bind(this)
    };

    oncompleteComponent = () => {
        this.setState({
            iscomplete: true
        })
    };

    render() {
        Survey
            .StylesManager
            .applyTheme("stone");
        var json = {
            pages: [
                {
                    questions: [
                        {
                            type: "matrix",
                            name: "GAD-7",
                            title: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
                            columns: [
                                {
                                    value: 0,
                                    text: "Not at all"
                                }, {
                                    value: 1,
                                    text: "Several days"
                                }, {
                                    value: 2,
                                    text: "More than half the days"
                                }, {
                                    value: 3,
                                    text: "Nearly every day"
                                },
                            ],
                            rows: [
                                {
                                    value: "feeling",
                                    text: "Feeling nervous, anxious or on edge?"
                                }, {
                                    value: "control",
                                    text: "Not being able to stop or control worrying?"
                                }, {
                                    value: "worrying",
                                    text: "Worrying too much about different things?"
                                }, {
                                    value: "trouble",
                                    text: "Trouble relaxing?"
                                }, {
                                    value: "restless",
                                    text: "Being so restless that it is hard to sit still?"
                                }, {
                                    value: "annoyed",
                                    text: "Becoming easily annoyed or irritable?"
                                }, {
                                    value: "afraid",
                                    text: "Feeling afraid as if something awful might happen?"
                                },
                            ]
                        },
                    ],
                }, {
                    questions: [
                        {
                            type: "matrix",
                            name: "PHQ-9",
                            title: "Over the last two weeks, how often have you been bothered by any of the following problems?",
                            columns: [
                                {
                                    value: 0,
                                    text: "Not at all"
                                }, {
                                    value: 1,
                                    text: "Several days"
                                }, {
                                    value: 2,
                                    text: "More than half the days"
                                }, {
                                    value: 3,
                                    text: "Nearly every day"
                                },
                            ],
                            rows: [
                                {
                                    value: "little",
                                    text: "Little interest or pleasure in doing things?"
                                }, {
                                    value: "down",
                                    text: "Feeling down, depressed, or hopeless?"
                                }, {
                                    value: "falling",
                                    text: "Trouble falling or staying asleep, or sleeping too much?"
                                }, {
                                    value: "energy",
                                    text: "Feeling tired or having little energy?"
                                }, {
                                    value: "poor",
                                    text: "Poor appetite or overeating?"
                                }, {
                                    value: "bad",
                                    text: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?"
                                }, {
                                    value: "concentrating",
                                    text: "Trouble concentrating on things, such as reading the newspaper or watching television?"
                                }, {
                                    value: "moving",
                                    text: "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?"
                                }, {
                                    value: "thoughts",
                                    text: "Thoughts that you would be better off dead, or of hurting yourself in some way?"
                                },
                            ]
                        },
                    ]
                }
            ]
        };

        var surveyRender = !this.state.iscomplete ? (
            <Survey.Survey
                json={json}
                showCompletePage={false}
                oncomplete={this.oncompleteComponent}
            />
        ) : null;

        var onSurveyCompletion = this.state.isComplete ? (
            <div>Thanks for Completeing the survey!</div>
        ) : null;

        

        return (
            <div classname="App">
                <div>
                    {surveyRender}
                    {onSurveyCompletion}
                </div>
            </div>
        );

    };
}

export default PHQ9;