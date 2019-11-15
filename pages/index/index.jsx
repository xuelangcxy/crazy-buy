import React from 'react';
// import Header from '../../components/Header';
import Title from '../../components/Title';
import Cart from '../../components/cart/Cart';
import styles from './index.less';
import Link from 'next/link';
import { Icon, Carousel, Button, Input, Drawer } from 'antd';
import { RICH_MEN, GOODS_LIST } from '../../utils/constants';
import { formatPrice } from '../../utils/util';

const ADD = 'add';
const MINUS = 'minus';

class Index extends React.Component {
	static async getInitialProps(props) {
    const { pathname, query } = props;
	  return {
      pathname,
      query,
    };
  }
  
  constructor(props) {
    super(props);
    const leftMoneyList = RICH_MEN.map(item => item.money);
    this.state = {
      value: 1,
      currentIdx: 0,
      leftMoneyList,
      isShowDrawer: false,
      cart: {
        mayun: {
          plane: {
            name: '波音747私人专属定制版飞机',
            label: 'plane',
            price: '9746000',
            count: 1,
          }
        },
        mahuateng: {
          plane: {
            name: '波音747私人专属定制版飞机',
            label: 'plane',
            price: '9746000',
            count: 2,
          }
        }
      },
    };
  }
  
  componentDidMount() {
    console.log(this.props);
    document.title = '花光大佬的钱...';
  }

	handleClick = type => {
		this.setState(prevState => ({
			value: type === ADD ? prevState.value + 1 : prevState.value - 1,
		}));
  };
  
  handleSwitch = direction => {
    let cur = this.state.currentIdx;
    const total = RICH_MEN.length;
    if (direction === 'left') {
      this.carousel.prev();
      cur = cur === 0 ? 2 : cur - 1;
    } else {
      this.carousel.next();
      cur = cur === total - 1 ? 0 : cur + 1;
    }
    this.setState({
      currentIdx: cur,
    });
  }

  toggleCart = status => {
    console.log(status);
    this.setState(prevState => ({
      isShowDrawer: status === 'close' ? false : !prevState.isShowDrawer,
    }));
  }

	render() {
    const { value, currentIdx, leftMoneyList, isShowDrawer, cart } = this.state;
		return (
			<div className={styles.mainContainer}>
				{/* <style jsx>
					{`
						.content {
							text-align: center;
						}
					`}
				</style> */}
				{/* <Header></Header> */}
        <Title>花光大佬的钱</Title>
        <div className={styles.header}>
          <Link href="/index">
            <a>花光大佬的钱</a>
          </Link>
          <Icon type="shopping-cart" onClick={() => this.toggleCart()} />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.mainWrapper}>
            <div className={styles.richMan}>
              <Icon className={styles.leftIcon} type="left" onClick={() => this.handleSwitch('left')} />
              <Carousel
                dots={false}
                ref={ref => {this.carousel = ref}}
              >
                {
                  RICH_MEN.map(item => {
                    const { name, name_en } = item;
                    const imgUrl = `/static/img/${name_en}.jpg`
                    return (
                      <div key={name_en}>
                        <div className={styles.personalInfo}>
                          {/* <img src="./static/img/mayun.jpg" alter="mayun"></img> */}
                          <div className={styles.avatar} style={{ backgroundImage: `url(${imgUrl})`}}></div>
                          <div className={styles.name}>{name}</div>
                        </div>
                      </div>
                    )
                  })
                }
              </Carousel>
              <Icon className={styles.rightIcon} type="right" onClick={() => this.handleSwitch('right')} />
            </div>
            <div className={styles.leftMoney}>还剩 ¥{formatPrice(leftMoneyList[currentIdx])}</div>
            <div className={styles.goodsWrapper}>
              {
                GOODS_LIST.map(item => {
                  const { name, label, price } = item;
                  // const imgUrl = `/static/img/${label}.jpg`;
                  const imgUrl = `/static/img/plane.jpg`;
                  console.log(imgUrl);
                  return (
                    <div key={label} className={styles.goodsItem}>
                      <div className={styles.goodsImgWrapper} style={{ backgroundImage: `url(${imgUrl})`}}></div>
                      <div className={styles.goodsName}>{name}</div>
                      <div className={styles.goodsPrice}>¥{formatPrice(price)}</div>
                      <div className={styles.operateWrapper}>
                        <Button type="danger" size="small" className={styles.sell}>卖</Button>
                        <Input className={styles.number} type="number" size="small" defaultValue="0"></Input>
                        <Button type="primary" size="small" className={styles.buy}>买</Button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <Cart
            isShowDrawer={isShowDrawer}
            cart={cart}
            handleToggleCart={status => this.toggleCart(status)}
          ></Cart>
        </div>
			</div>
		);
	}
}

export default Index;
