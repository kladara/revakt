import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/bs';
import 'moment-duration-format';

class RemainingTime extends Component {
    render() {

        let zora_date = moment()
            .hours(moment.duration(this.props.dailyPrayerTimes[0], 'seconds').get('hours'))
            .minutes(moment.duration(this.props.dailyPrayerTimes[0], 'seconds').get('minutes'))
            .seconds(moment.duration(this.props.dailyPrayerTimes[0], 'seconds').get('seconds'));

        let izlazakSunca_date = moment()
            .hours(moment.duration(this.props.dailyPrayerTimes[1], 'seconds').get('hours'))
            .minutes(moment.duration(this.props.dailyPrayerTimes[1], 'seconds').get('minutes'))
            .seconds(moment.duration(this.props.dailyPrayerTimes[1], 'seconds').get('seconds'));

        let podne_date = moment()
            .hours(moment.duration(this.props.dailyPrayerTimes[2], 'seconds').get('hours'))
            .minutes(moment.duration(this.props.dailyPrayerTimes[2], 'seconds').get('minutes'))
            .seconds(moment.duration(this.props.dailyPrayerTimes[2], 'seconds').get('seconds'));

        let ikindija_date = moment()
            .hours(moment.duration(this.props.dailyPrayerTimes[3], 'seconds').get('hours'))
            .minutes(moment.duration(this.props.dailyPrayerTimes[3], 'seconds').get('minutes'))
            .seconds(moment.duration(this.props.dailyPrayerTimes[3], 'seconds').get('seconds'));

        let aksam_date = moment()
            .hours(moment.duration(this.props.dailyPrayerTimes[4], 'seconds').get('hours'))
            .minutes(moment.duration(this.props.dailyPrayerTimes[4], 'seconds').get('minutes'))
            .seconds(moment.duration(this.props.dailyPrayerTimes[4], 'seconds').get('seconds'));

        let jacija_date = moment()
            .hours(moment.duration(this.props.dailyPrayerTimes[5], 'seconds').get('hours'))
            .minutes(moment.duration(this.props.dailyPrayerTimes[5], 'seconds').get('minutes'))
            .seconds(moment.duration(this.props.dailyPrayerTimes[5], 'seconds').get('seconds'));

        let zoraDiffTime = zora_date.diff(this.props.date);
        let zoraDuration = moment.duration(zoraDiffTime);
        let zoraHrs = zoraDuration.hours(),
            zoraMins = zoraDuration.minutes(),
            zoraSecs = zoraDuration.seconds();

        let izlazakSuncaDiffTime = izlazakSunca_date.diff(this.props.date);
        let izlazakSuncaDuration = moment.duration(izlazakSuncaDiffTime);
        let izlazakSuncaHrs = izlazakSuncaDuration.hours(),
            izlazakSuncaMins = izlazakSuncaDuration.minutes(),
            izlazakSuncaSecs = izlazakSuncaDuration.seconds();

        let podneDiffTime = podne_date.diff(this.props.date);
        let podneDuration = moment.duration(podneDiffTime);
        let podneHrs = podneDuration.hours(),
            podneMins = podneDuration.minutes(),
            podneSecs = podneDuration.seconds();

        let ikindijaDiffTime = ikindija_date.diff(this.props.date);
        let ikindijaDuration = moment.duration(ikindijaDiffTime);
        let ikindijaHrs = ikindijaDuration.hours(),
            ikindijaMins = ikindijaDuration.minutes(),
            ikindijaSecs = ikindijaDuration.seconds();

        let aksamDiffTime = aksam_date.diff(this.props.date);
        let aksamDuration = moment.duration(aksamDiffTime);
        let aksamHrs = aksamDuration.hours(),
            aksamMins = aksamDuration.minutes(),
            aksamSecs = aksamDuration.seconds();

        let jacijaDiffTime = jacija_date.diff(this.props.date);
        let jacijaDuration = moment.duration(jacijaDiffTime);
        let jacijaHrs = jacijaDuration.hours(),
            jacijaMins = jacijaDuration.minutes(),
            jacijaSecs = jacijaDuration.seconds();

        return (
            <div>
                {moment(this.props.date).isBefore(zora_date) &&
                    <div className="remaining-time"> zora je za {`${zoraHrs}h ${zoraMins}m ${zoraSecs}s`} </div>
                }
                {moment(this.props.date).isBefore(izlazakSunca_date) &&
                    <div className="remaining-time"> izlazak sunca je za {`${izlazakSuncaHrs}h ${izlazakSuncaMins}m ${izlazakSuncaSecs}s`} </div>
                }
                {moment(this.props.date).isBefore(podne_date) &&
                    <div className="remaining-time"> podne je za {`${podneHrs}h ${podneMins}m ${podneSecs}s`} </div>
                }
                {moment(this.props.date).isBefore(ikindija_date) &&
                    <div className="remaining-time"> ikindija je za {`${ikindijaHrs}h ${ikindijaMins}m ${ikindijaSecs}s`} </div>
                }
                {moment(this.props.date).isBefore(aksam_date) &&
                    <div className="remaining-time"> akšam je za {`${aksamHrs}h ${aksamMins}m ${aksamSecs}s`} </div>
                }
                {moment(this.props.date).isBefore(jacija_date) &&
                    <div className="remaining-time"> jacija je za {`${jacijaHrs}h ${jacijaMins}m ${jacijaSecs}s`} </div>
                }
            </div>
        );
    }
}

export default RemainingTime;
