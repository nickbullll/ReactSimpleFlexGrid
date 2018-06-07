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
        <Col key={i.toString()} md={{ span: `${12 / colCount}`, order: 12 - i }}>
          <div style={{ display: 'flex', 'justifyContent': 'center', 'alignItems': 'center', height: '150px', fontSize: '1.5em', background: `${i % 2 === 0 ? 'rgb(30, 197, 228)' : 'rgb(45, 222, 175)'}`, 'color': '#FFF' }}>{i+1} col-4</div>
        </Col>
      );
      colCode += `  <Col span={${12 / colCount}} />\n`;
    }
    cols.push(
      <Col md={{ span: 0 }}>
        <div style={{ display: 'flex', 'justifyContent': 'center', 'alignItems': 'center', height: '150px', fontSize: '1.5em', 'color': '#FFF' }}>col-4</div>
      </Col>
    );
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
