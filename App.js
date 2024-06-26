import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Button } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

//get array of length 25
var itemArray = new Array(25).fill('empty');



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      randomNumber: "",
      count: 1
    };
  }

  //when app loads up
  componentDidMount() {
    this.setState({ randomNumber : this.generateRandomNumber() });
  }
  
  generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 25);
    this.setState({ randomNumber: randomNumber, isScratched: true })
    return randomNumber;
  };

  scratchItem = (itemNumber) => {
    this.setState({
      count: this.state.count + 1
    })
    if (this.state.count > 5) {
      this.resetGame();
    } else {
    if (this.state.randomNumber === itemNumber) {
      itemArray[itemNumber] = "lucky"
    } else {
      itemArray[itemNumber] = "unlucky"
    }
    this.forceUpdate();
  }
}

  scratchItemIcon = (itemNumber) => {
    if (itemArray[itemNumber] === "lucky") {
      return "dollar"
    } else if (itemArray[itemNumber] === "unlucky") {
      return "frown-o"
    }
    return "circle"
  };

  scratchItemColor = (itemNumber) => {
    if (itemArray[itemNumber] === "lucky") {
      return "green"
    } else if (itemArray[itemNumber] === "unlucky") {
      return "red"
    }
    return "black"
  }

  showAllItem = () => {
    itemArray.fill('unlucky');
    itemArray[this.state.randomNumber] = 'lucky';

    this.forceUpdate();
  }

  resetGame = () => {
    this.setState({
      randomNumber: this.generateRandomNumber(), count: 1},
      () => {
        itemArray.fill('empty');

        this.forceUpdate();
      }
      )
      
  }

  render() {
    return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style = {styles.topBar}>
      <Text style = {styles.topText}>Scratch and Win</Text>
      </View>
      <View style = {styles.grid}>
        <View style = {styles.itemRow}>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(0)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(0)}
              size = {50}
              color = {this.scratchItemColor(0)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(1)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(1)}
              size = {50}
              color = {this.scratchItemColor(1)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(2)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(2)}
              size = {50}
              color = {this.scratchItemColor(2)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(3)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(3)}
              size = {50}
              color = {this.scratchItemColor(3)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(4)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(4)}
              size = {50}
              color = {this.scratchItemColor(4)}
            />
          </TouchableOpacity>
        </View>
        <View style = {styles.itemRow}>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(5)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(5)}
              size = {50}
              color = {this.scratchItemColor(5)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(6)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(6)}
              size = {50}
              color = {this.scratchItemColor(6)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(7)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(7)}
              size = {50}
              color = {this.scratchItemColor(7)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(8)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(8)}
              size = {50}
              color = {this.scratchItemColor(8)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(9)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(9)}
              size = {50}
              color = {this.scratchItemColor(9)}
            />
          </TouchableOpacity>
        </View>
        <View style = {styles.itemRow}>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(10)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(10)}
              size = {50}
              color = {this.scratchItemColor(10)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(11)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(11)}
              size = {50}
              color = {this.scratchItemColor(11)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(12)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(12)}
              size = {50}
              color = {this.scratchItemColor(12)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(13)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(13)}
              size = {50}
              color = {this.scratchItemColor(13)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(14)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(14)}
              size = {50}
              color = {this.scratchItemColor(14)}
            />
          </TouchableOpacity>
        </View>
        <View style = {styles.itemRow}>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(15)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(15)}
              size = {50}
              color = {this.scratchItemColor(15)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(16)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(16)}
              size = {50}
              color = {this.scratchItemColor(16)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(17)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(17)}
              size = {50}
              color = {this.scratchItemColor(17)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(18)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(18)}
              size = {50}
              color = {this.scratchItemColor(18)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(19)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(19)}
              size = {50}
              color = {this.scratchItemColor(19)}
            />
          </TouchableOpacity>
        </View>
        <View style = {styles.itemRow}>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(20)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(20)}
              size = {50}
              color = {this.scratchItemColor(20)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(21)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(21)}
              size = {50}
              color = {this.scratchItemColor(21)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(22)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(22)}
              size = {50}
              color = {this.scratchItemColor(22)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(23)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(23)}
              size = {50}
              color = {this.scratchItemColor(23)}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style = {styles.item}
            onPress = { () => {
              this.scratchItem(24)
            } }
          >
            <FontAwesome
              name = {this.scratchItemIcon(24)}
              size = {50}
              color = {this.scratchItemColor(24)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Button full success style = {styles.button}
      onPress = { () => {
        this.showAllItem()
      } }
      >
        <Text style = {styles.buttonText}>Show All coupons</Text>
      </Button>
      <Button full primary style = {styles.button}
      onPress = { () => {
        this.resetGame()
      } }
      >
        <Text style = {styles.buttonText}>Reset</Text>
      </Button>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  grid: {},

  itemRow: {
    flexDirection: "row"
  },
  item: {
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#000000",
    minWidth: 75
  },
  button: {
    marginVertical: 15
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18
  },
  topBar: {
    backgroundColor: "#8B78E6",
    height: 50,
    justifyContent: "center",
    width: Dimensions.get('window').width,
    marginVertical: 20
  },
  topText: {
    color: "#FFF",
    textAlign: "center"
  }
});
