import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import stylesData from './stylesData';

import { ListRepos } from './Redusers';

class RepoList extends Component {
    componentDidMount() {
        this.props.ListRepos('relferreira');
    }
    renderItem = ({ item }) => (
        <View style={stylesData.item}>
            <Text>{item.name}</Text>
        </View>
    );
    render() {
        const { repos } = this.props;
        return (
            <FlatList
                styles={stylesData.container}
                data={repos}
                renderItem={this.renderItem}
            />
        );
    }
}

const mapStateToProps = state => {
    let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
    return {
        repos: storedRepositories
    };
};

const mapDispatchToProps = {
    ListRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);