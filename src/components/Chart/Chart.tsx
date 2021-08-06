import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import styles from './Chart.style';
import CHART_CONFIG from '../../constants/chartConfig';
interface ChartProps {
  title: string;
  suffix: string;
  info: {
    label: string;
    data: number;
  }[];
}

const Chart: React.FC<ChartProps> = ({title, info, suffix}) => {
  return (
    <View style={styles.chartContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>{title}</Text>
      </View>
      <LineChart
        data={{
          labels: info.map(item => item.label),
          datasets: [{data: info.map(item => item.data)}],
        }}
        fromZero
        width={Dimensions.get('screen').width - 75}
        height={Dimensions.get('screen').height / 4}
        yAxisSuffix={suffix}
        xLabelsOffset={-5}
        chartConfig={CHART_CONFIG}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

export default Chart;
