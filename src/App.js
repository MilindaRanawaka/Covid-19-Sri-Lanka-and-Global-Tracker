import React, {Component} from 'react';
import Logo from "./logo.png";
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

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark fixed-top">

                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <a className="navbar-brand" href="https://milindaranawaka.github.io/Covid-19-Sri-Lanka-and-Global-Tracker/">Covid-19 Sri Lanka and Global Tracker</a>

                            {/*<div classname="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul classname="navbar-nav">
                              <li classname="nav-item active">
                                  <a classname="nav-link" href="#">link <span classname="sr-only">(current)</span></a>
                              </li>
                              <li classname="nav-item">
                                  <a classname="nav-link" href="#">link</a>
                              </li>
                              <li classname="nav-item dropdown">
                                  <a classname="nav-link dropdown-toggle" href="http://example.com"
                                     id="navbardropdownmenulink" data-toggle="dropdown">dropdown link</a>
                                  <div classname="dropdown-menu" aria-labelledby="navbardropdownmenulink">
                                      <a classname="dropdown-item" href="#">action</a> <a classname="dropdown-item"
                                                                                          href="#">another action</a> <a
                                      classname="dropdown-item" href="#">something else here</a>
                                      <div classname="dropdown-divider">
                                      </div>
                                      <a classname="dropdown-item" href="#">separated link</a>
                                  </div>
                              </li>
                          </ul>
                          <form classname="form-inline">
                              <input classname="form-control mr-sm-2" type="text"/>
                              <button classname="btn btn-primary my-2 my-sm-0" type="submit">
                                  search
                              </button>
                          </form>
                          <ul classname="navbar-nav ml-md-auto">
                              <li classname="nav-item active">
                                  <a classname="nav-link" href="#">link <span classname="sr-only">(current)</span></a>
                              </li>
                              <li classname="nav-item dropdown">
                                  <a classname="nav-link dropdown-toggle" href="http://example.com"
                                     id="navbardropdownmenulink" data-toggle="dropdown">dropdown link</a>
                                  <div classname="dropdown-menu dropdown-menu-right"
                                       aria-labelledby="navbardropdownmenulink">
                                      <a classname="dropdown-item" href="#">action</a> <a classname="dropdown-item"
                                                                                          href="#">another action</a> <a
                                      classname="dropdown-item" href="#">something else here</a>
                                      <div classname="dropdown-divider">
                                      </div>
                                      <a classname="dropdown-item" href="#">separated link</a>
                                  </div>
                              </li>
                          </ul>
                      </div>*/}
                        </nav>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <h3>
                            Sri Lanka
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-white bg-primary">
                            <h5 className="card-header">
                                New Cases
                            </h5>
                            <div className="card-body">
                                <p className="card-text">
                                    {this.state.local_new_cases}
                                </p>
                            </div>
                            <div className="card-footer">
                                Last updated {this.state.update_date_time}
                            </div>
                        </div>
                        <br/>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-white bg-warning">
                            <h5 className="card-header">
                                Total Cases
                            </h5>
                            <div className="card-body">
                                <p className="card-text">
                                    {this.state.local_total_cases}
                                </p>
                            </div>
                            <div className="card-footer">
                                Last updated {this.state.update_date_time}
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-danger">
                            <h5 className="card-header">
                                Deaths
                            </h5>
                            <div className="card-body">
                                <p className="card-text">
                                    {this.state.local_deaths}
                                </p>
                            </div>
                            <div className="card-footer">
                                Last updated {this.state.update_date_time}
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>

                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-white bg-success">
                            <h5 className="card-header">
                                Recovered
                            </h5>
                            <div className="card-body">
                                <p className="card-text">
                                    {this.state.local_recovered}
                                </p>
                            </div>
                            <div className="card-footer">
                                Last updated {this.state.update_date_time}
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-danger">
                            <h5 className="card-header">
                                New Deaths
                            </h5>
                            <div className="card-body">
                                <p className="card-text">
                                    {this.state.local_new_deaths}
                                </p>
                            </div>
                            <div className="card-footer">
                                Last updated {this.state.update_date_time}
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-info">
                            <h5 className="card-header">
                                Suspicious Patients in Hospitals
                            </h5>
                            <div className="card-body">
                                <p className="card-text">
                                    {this.state.local_total_number_of_individuals_in_hospitals}
                                </p>
                            </div>
                            <div className="card-footer">
                                Last updated {this.state.update_date_time}
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>
                            Global
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-white bg-primary">
                            <h5 className="card-header">
                                New Cases
                            </h5>
                            <div className="card-body">
                                <p className="card-text">
                                    {this.state.global_new_cases}
                                </p>
                            </div>
                            <div className="card-footer">
                                Last updated {this.state.update_date_time}
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-warning">
                            <h5 className="card-header">
                                Total Cases
                            </h5>
                            <div className="card-body">
                                <p className="card-text">
                                    {this.state.global_total_cases}
                                </p>
                            </div>
                            <div className="card-footer">
                                Last updated {this.state.update_date_time}
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-danger">
                            <h5 className="card-header">
                                Deaths
                            </h5>
                            <div className="card-body">
                                <p className="card-text">
                                    {this.state.global_deaths}
                                </p>
                            </div>
                            <div className="card-footer">
                                Last updated {this.state.update_date_time}
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>

                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card text-white bg-success">
                            <h5 className="card-header">
                                Recovered
                            </h5>
                            <div className="card-body">
                                <p className="card-text">
                                    {this.state.global_recovered}
                                </p>
                            </div>
                            <div className="card-footer">
                                Last updated {this.state.update_date_time}
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col-md-6">
                        <div className="card text-white bg-danger">
                            <h5 className="card-header">
                                New Deaths
                            </h5>
                            <div className="card-body">
                                <p className="card-text">
                                    {this.state.global_new_deaths}
                                </p>
                            </div>
                            <div className="card-footer">
                                Last updated {this.state.update_date_time}
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark fixed-bottom">

                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <p className="navbar-brand" style={{"text-align": "center;"}}> Made with ❤️ by <a className="navbar-brand" href="https://www.linkedin.com/in/milinda-ranawaka-5303a5185/">Milinda Ranawaka </a> | Powered By HEALTH PROMOTION BUREAU: <a className="navbar-brand" href="https://hpb.health.gov.lk/en/api-documentation">https://hpb.health.gov.lk/en/api-documentation</a> </p>

                        </nav>
                    </div>
                </div>
            </div>

        )}
</div>
        );
    }

}