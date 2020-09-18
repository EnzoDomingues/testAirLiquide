import React, {Component} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {loadTask} from '../store/actions/actions';
import {CheckBox, Button} from 'react-native-elements';
class TodoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTask: '',
      resetDataSource: [],
      dataSource: this.props.todo.listTodo,
    };
  }
  componentDidMount() {
    this.props.loadTask();
  }

  componentWillReceiveProps({todo}) {
    this.setState({
      dataSource: todo.listTodo,
    });
  }

  onPressCheck = (index) => {
    this.setState((prevState) => {
      const dataSource = [...prevState.dataSource];
      if (dataSource[index].checked) {
        dataSource[index].checked = false;
      } else {
        dataSource[index].checked = true;
      }
      return {dataSource};
    });
  };

  onFinishTaks = () => {
    this.props.loadTask();
  };

  render() {
    const {dataSource} = this.state;
    console.log(dataSource);
    return (
      <View style={styles.container}>
        {this.props.todo.isFetching && (
          <ActivityIndicator size="small" color="#004ee7" />
        )}
        <FlatList
          data={dataSource && dataSource.length > 0 && dataSource}
          renderItem={({item, index}) => (
            <CheckBox
              key={index}
              title={item.name}
              onPress={() => this.onPressCheck(index)}
              checked={item.checked}
              checkedIcon="check-square"
              uncheckedIcon="check-square"
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
        <Button
          raised
          backgroundColor={'#004ee7'}
          title="FINISH TASKS"
          onPress={() => this.onFinishTaks()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadTask: () => dispatch(loadTask()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoView);
