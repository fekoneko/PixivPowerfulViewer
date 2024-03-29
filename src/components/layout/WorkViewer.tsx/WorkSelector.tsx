import { ScrollView, Text } from 'react-native-windows';
import useWorks from '../../../hooks/useWorks';
import colors from '../../../styles/colors';

const WorkSelector = () => {
  const works = useWorks();

  return (
    <ScrollView
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      style={{ flexBasis: 0, flexGrow: 3 }}
    >
      {works.map((work) => (
        <Text key={work.id} style={{ color: colors.text }}>
          {work.title}
        </Text>
      ))}
    </ScrollView>
  );
};
export default WorkSelector;
