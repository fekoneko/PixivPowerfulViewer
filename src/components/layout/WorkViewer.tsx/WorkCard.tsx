import { Image, Text, View } from 'react-native-windows';
import { Work } from '../../../lib/Collection';
import colors from '../../../styles/colors';

interface WorkCardProps {
  work: Work;
}
const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginVertical: 8,
      }}
    >
      {work.images?.length ? (
        <Image
          source={{
            uri: 'file://' + work.images[0].path.replaceAll('\\', '/'),
          }}
          style={{
            width: 80,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#ffffff44',
          }}
        />
      ) : (
        <View
          style={{
            width: 80,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#ffffff44',
          }}
        />
      )}
      <View>
        <Text style={{ color: colors.textAccent, fontWeight: 'bold' }}>
          {work.title ?? 'Untitled'}
        </Text>
        <Text style={{ color: colors.text }}>
          {work.tags?.join('  |  ') ?? 'no tags'}
        </Text>
        <Text style={{ color: colors.text }}>
          {work.images?.length &&
            'file://' + work.images[0].path.replaceAll('\\', '/')}
        </Text>
      </View>
    </View>
  );
};
export default WorkCard;
