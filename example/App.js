import React from 'react';
import Col from '../src/Col';
import Row from '../src/Row';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gutterPx: 8,
      colCount: 2,
    };
  }
  onGutterChange = (e) => {
    this.setState({ gutterPx: e.target.value });
  }
  onColCountChange = (e) => {
    this.setState({ colCount: e.target.value });
  }
  render() {
    const { gutterPx, colCount } = this.state;
    const cols = [];
    let colCode = '';
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Col key={i.toString()} span={12 / colCount}>
          <div style={{ display: 'flex', 'justifyContent': 'center', 'alignItems': 'center', height: '50px', background: `${i % 2 === 0 ? '#6fbdec' : '#2880b7'}`, 'color': '#FFF' }}>Column</div>
        </Col>
      );
      colCode += `  <Col span={${12 / colCount}} />\n`;
    }
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginRight: 6 }}>Gutter (px): </span>
          <div style={{ width: '50%' }}>
            <input onChange={this.onGutterChange} />
          </div>
          <span style={{ marginRight: 6 }}>Column Count:</span>
          <div style={{ width: '50%' }}>
            <input onChange={this.onColCountChange} />
          </div>
        </div>
        <Row gutter={gutterPx}>{cols}</Row>
        <pre>{`<Row gutter={${gutterPx}}>\n${colCode}</Row>`}</pre>
      </div>
    );
  }
}
