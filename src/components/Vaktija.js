import React, { Component } from 'react';
import './Vaktija.css';
import data from "../data/vaktija.json";
import moment from 'moment';
import momenth from 'moment-hijri';
import 'moment/locale/bs';
import 'moment-duration-format';

import RemainingTime from './RemainingTime';

class Vaktija extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: 106,
            date: moment()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: moment()
        });
    }

    render() {
        let vaktija = JSON.stringify(data);
        let vaktijaObj = JSON.parse(vaktija);
        let zora = 'zora ';
        let izlazakSunca = 'izlazak sunca ';
        let podne = 'podne ';
        let ikindija = 'ikindija ';
        let aksam = 'akšam ';
        let jacija = 'jacija ';

        let location = this.state.location;

        let date = this.state.date;
        //let year = date.format('YYYY');
        let month = date.format('M');
        let day = date.format('D');

        let dailyPrayerTimes0 =
            vaktijaObj.sarajevo.mjesec[month - 1].dan[day - 1].vakat[0] +
            vaktijaObj.lokacija[location].mjesec[month - 1].vakat[0];
        let dailyPrayerTimes1 =
            vaktijaObj.sarajevo.mjesec[month - 1].dan[day - 1].vakat[1] +
            vaktijaObj.lokacija[location].mjesec[month - 1].vakat[0];
        let dailyPrayerTimes2 =
            vaktijaObj.sarajevo.mjesec[month - 1].dan[day - 1].vakat[2] +
            vaktijaObj.lokacija[location].mjesec[month - 1].vakat[1];
        let dailyPrayerTimes3 =
            vaktijaObj.sarajevo.mjesec[month - 1].dan[day - 1].vakat[3] +
            vaktijaObj.lokacija[location].mjesec[month - 1].vakat[2];
        let dailyPrayerTimes4 =
            vaktijaObj.sarajevo.mjesec[month - 1].dan[day - 1].vakat[4] +
            vaktijaObj.lokacija[location].mjesec[month - 1].vakat[2];
        let dailyPrayerTimes5 =
            vaktijaObj.sarajevo.mjesec[month - 1].dan[day - 1].vakat[5] +
            vaktijaObj.lokacija[location].mjesec[month - 1].vakat[2];

        let dailyPrayerTimes = [];
        dailyPrayerTimes.push(dailyPrayerTimes0);
        dailyPrayerTimes.push(dailyPrayerTimes1);
        dailyPrayerTimes.push(dailyPrayerTimes2);
        dailyPrayerTimes.push(dailyPrayerTimes3);
        dailyPrayerTimes.push(dailyPrayerTimes4);
        dailyPrayerTimes.push(dailyPrayerTimes5);

        // console.log(date);
        return (
            <div>

                <RemainingTime dailyPrayerTimes={dailyPrayerTimes} date={date} />

                <div className="location">
                    {vaktijaObj.ime[location].toLowerCase()}
                </div>
                <div className="date">
                    {date.format('dddd, Do MMMM YYYY')}
                </div>
                <div className="dateh">
                    {momenth().format('iYYYY/iM/iD')}
                </div>
                <div className="vakat">
                    <div className="vakat-name">
                        {zora}
                    </div>
                    <div className="vakat-time">
                        {moment.duration(dailyPrayerTimes0, 'seconds').format("h:mm")}
                    </div>
                </div>
                <div className="vakat">
                    <div className="vakat-name">
                        {izlazakSunca}
                    </div>
                    <div className="vakat-time">
                        {moment.duration(dailyPrayerTimes1, 'seconds').format("h:mm")}
                    </div>
                </div>
                <div className="vakat">
                    <div className="vakat-name">
                        {podne}
                    </div>
                    <div className="vakat-time">
                        {moment.duration(dailyPrayerTimes2, 'seconds').format("h:mm")}
                    </div>
                </div>
                <div className="vakat">
                    <div className="vakat-name">
                        {ikindija}
                    </div>
                    <div className="vakat-time">
                        {moment.duration(dailyPrayerTimes3, 'seconds').format("h:mm")}
                    </div>
                </div>
                <div className="vakat">
                    <div className="vakat-name">
                        {aksam}
                    </div>
                    <div className="vakat-time">
                        {moment.duration(dailyPrayerTimes4, 'seconds').format("h:mm")}
                    </div>
                </div>
                <div className="vakat">
                    <div className="vakat-name">
                        {jacija}
                    </div>
                    <div className="vakat-time">
                        {moment.duration(dailyPrayerTimes5, 'seconds').format("h:mm")}
                    </div>
                </div>
                <div className="footer">
                    copyleft by <a href="https://www.vaktija.ba">vaktija.ba</a> 2008 - 2017
                </div>
                <div className="location">
                    <select
                        className="select-location"
                        onChange={event => this.setState({ location: event.target.value })}
                        value={this.state.location}
                    >
                        {
                            vaktijaObj.ime.map((ime, index) => <option key={index} value={index}>{ime.toLowerCase()}</option>)
                        }
                    </select>
                </div>
            </div>
        );
    }
}

export default Vaktija;
