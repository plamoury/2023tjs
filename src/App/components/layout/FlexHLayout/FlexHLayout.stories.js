/* eslint-disable */
import FlexHLayout from './FlexHLayout';

export default {
  title: "FlexHLayout",
};

export const Default = () => <FlexHLayout style={{ padding: "8px", border: "1px" }}>
  <div style={{ border: '1px solid black', backgroundColor: "tomato", padding: '15px', textAlign: 'center' }}>FirstChild</div>
  <div style={{ border: '1px solid black', backgroundColor: "tomato", padding: '15px', textAlign: 'center' }}>SecondChild</div>
</FlexHLayout>;

Default.story = {
  name: 'default',
};
