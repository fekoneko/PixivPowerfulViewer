import { ScrollView } from 'react-native-windows';
import useWorks from '../../../hooks/useWorks';
import { memo } from 'react';
import WorkCard from './WorkCard';

const WorkList = () => {
  const works = useWorks();

  return (
    <ScrollView
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      style={{ flexBasis: 0, flexGrow: 3 }}
    >
      {works.map((work) => (
        <WorkCard key={work.id} work={work} />
      ))}
    </ScrollView>
  );
};
export default memo(WorkList);
