import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';
import useAxiosHistory from '~/service/history';
import * as moment from 'moment';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';

const ChartBar = () => {
    const { fore } = useAxiosHistory();
    const swapChart = useSelector((state) => state.chart.value);

    let tempC = fore.map((time) => {
        return time.hour.map((hour) => {
            return { x: moment(hour.time, 'YYYY-MM-DD hh:mm').format('hh A'), y: `${hour.temp_c.toFixed(0)}` };
        });
    });
    let humidity = fore.map((time) => {
        return time.hour.map((hour) => {
            return { x: moment(hour.time, 'YYYY-MM-DD hh:mm').format('hh A'), y: `${hour.humidity.toFixed(0)}` };
        });
    });
    return (
        <div>
            {swapChart ? (
                <VictoryChart
                    height={200}
                    width={1100}
                    className={css`
                        font-size: 5px;
                    `}
                    // dependentAxis={false}
                >
                    <VictoryBar style={{ data: { fill: '#124c84' } }} data={tempC[0]} labels={({ datum }) => datum.y} />

                    <VictoryAxis />
                </VictoryChart>
            ) : (
                <VictoryChart
                    height={200}
                    width={1100}
                    className={css`
                        font-size: 5px;
                    `}
                    // dependentAxis={false}
                >
                    <VictoryBar
                        style={{
                            data: { fill: '#124c84' },
                            labels: {
                                fontSize: 15,
                                fill: '#ffffff',
                            },
                        }}
                        data={humidity[0]}
                        labels={({ datum }) => datum.y}
                    />

                    <VictoryAxis />
                </VictoryChart>
            )}
        </div>
    );
};
export default ChartBar;
