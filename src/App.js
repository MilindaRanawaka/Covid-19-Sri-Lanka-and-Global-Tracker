import React, {Component} from 'react';
import './App.css';

export default class FetchData extends Component{

    state = {
    loading: true,
        update_date_time: null,
        local_new_cases: null,
        local_total_cases: null,
        local_total_number_of_individuals_in_hospitals: null,
        local_deaths: null,
        local_new_deaths: null,
        local_recovered: null,
        global_new_cases: null,
        global_total_cases: null,
        global_deaths: null,
        global_new_deaths: null,
        global_recovered: null,
    };

    async componentDidMount(){
        const url = "https://hpb.health.gov.lk/api/get-current-statistical";

        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            update_date_time: data.data.update_date_time,
            local_new_cases: data.data.local_new_cases,
            local_total_cases: data.data.local_total_cases,
            local_total_number_of_individuals_in_hospitals: data.data.local_total_number_of_individuals_in_hospitals,
            local_deaths: data.data.local_deaths,
            local_new_deaths: data.data.local_new_deaths,
            local_recovered: data.data.local_recovered,
            global_new_cases: data.data.global_new_cases,
            global_total_cases: data.data.global_total_cases,
            global_deaths: data.data.global_deaths,
            global_new_deaths: data.data.global_new_deaths,
            global_recovered: data.data.global_recovered,
            loading: false
        });
        console.log(data);
    }

    render() {
        return (
            <div>
            {this.state.loading || !this.state.update_date_time ? (
                <div>Loading....</div>
            ) :(
                <div>

                    <div style={{padding: "50px", paddingBottom: "20px"}}>

                    <h1>Sri Lanka</h1>

                    <div className="card-deck">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">New Cases</h5>
                                <p className="card-text">{this.state.local_new_cases}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated {this.state.update_date_time} </small>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Total Cases</h5>
                                <p className="card-text">{this.state.local_total_cases}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated {this.state.update_date_time} </small>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Deaths</h5>
                                <p className="card-text">{this.state.local_deaths}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated {this.state.update_date_time} </small>
                            </div>
                        </div>
                    </div>

                    <br/>

                    <div className="card-deck">
                        <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Recovered</h5>
                                    <p className="card-text">{this.state.local_recovered}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated {this.state.update_date_time} </small>
                                </div>
                        </div>
                        <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">New Deaths</h5>
                                    <p className="card-text">{this.state.local_new_deaths}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated {this.state.update_date_time} </small>
                                </div>
                        </div>
                        <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Suspected or Confirmed Cases Currently Hospitalized</h5>
                                    <p className="card-text">{this.state.local_total_number_of_individuals_in_hospitals}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated {this.state.update_date_time} </small>
                                </div>
                        </div>
                    </div>

                    </div>

                    <div style={{padding: "50px", paddingTop: "20px"}}>
                    <h1>Global</h1>

                    <div className="card-deck">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">New Cases</h5>
                                <p className="card-text">{this.state.global_new_cases}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated {this.state.update_date_time} </small>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Total Cases</h5>
                                <p className="card-text">{this.state.global_total_cases}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated {this.state.update_date_time} </small>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Deaths</h5>
                                <p className="card-text">{this.state.global_deaths}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated {this.state.update_date_time} </small>
                            </div>
                        </div>
                    </div>

                    <br/>

                    <div className="card-deck">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Recovered</h5>
                                <p className="card-text">{this.state.global_recovered}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated {this.state.update_date_time} </small>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">New Deaths</h5>
                                <p className="card-text">{this.state.global_new_deaths}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated {this.state.update_date_time} </small>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>




            )}
        </div>
        );
    }

}