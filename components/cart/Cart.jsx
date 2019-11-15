import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, Button, Collapse, Checkbox, List } from 'antd';
import styles from './Cart.less';
import { RICH_MEN } from '../../utils/constants';
import { formatPrice, getNameByLabel } from '../../utils/util';

const { Panel } = Collapse;

export default class Cart extends React.Component {
  static propTypes = {
    isShowDrawer: PropTypes.bool.isRequired,
    cart: PropTypes.object.isRequired,
    toggleCart: PropTypes.func.isRequired,
  }

  static defaultProps = {}

  componentDidMount() {
    console.log(this.props.cart);
  }

  onChange = key => {
    console.log(key);
    console.log(this.props.cart[key]);
  }

  handleClickCheckBox = (e) => {
    e.stopPropagation();
  }

  renderPanelHeader = key => {
    return (
      <div className={styles.panelHeader}>
        <Checkbox onChange={() => this.onChange(key)} onClick={(e) => this.handleClickCheckBox(e)}></Checkbox>
        <div className={styles.panelName}>{getNameByLabel(key)}</div>
      </div>
    )
  }

  render() {
    const { isShowDrawer, cart } = this.props;
    const nameList = Object.keys(cart);
    return (
      <div>
        <style>
          {`
            .ant-drawer-body {
              position: absolute;
              width: 100%;
              height: calc(100% - 55px);
              padding-top: 0;
              padding-bottom: 0;
            }
          `}
        </style>
        <Drawer
          title="购物车"
          placement="right"
          closable={false}
          onClose={() => this.props.handleToggleCart('close')}
          visible={isShowDrawer}
          getContainer={false}
          width={500}
          style={{ position: 'absolute' }}
        >
          <div className={styles.goodsListContainer}>
            <Collapse
              bordered={false}
              defaultActiveKey={nameList}
              expandIconPosition="right"
            >
              {
                nameList.map(key => (
                  <Panel
                    header={this.renderPanelHeader(key)}
                    key={key}
                  >
                    <List
                      dataSource={Object.keys(cart[key])}
                      renderItem={item => {
                        // const curItem = cart[item];
                        console.log('xx: ', Object.keys(cart[key]));
                        const curItem = cart[key][item];
                        console.log('xx: ', curItem);
                        const { name, label, price, count } = curItem;
                        return (
                          <List.Item>
                            <div className={styles.itemWrapper}>
                              <img src={`/static/img/${label}.jpg`} alt=""/>
                              <div className={styles.detailWrapper}>
                                <div className={styles.goodsName}>{name}</div>
                                <div className={styles.priceWrapper}>
                                  <div className={styles.goodsPrice}>¥{formatPrice(price)}</div>
                                  <div className={styles.goodsCount}>x{count}</div>
                                </div>
                              </div>
                            </div>
                          </List.Item>
                        )
                      }}
                    ></List>
                  </Panel>
                ))
              }
            </Collapse>
          </div>
          <div className={styles.operationWrapper}>
            <Button type="danger">成绩 PK</Button>
            <Button type="primary">立即购买</Button>
          </div>
        </Drawer>
      </div>
    )
  }
}