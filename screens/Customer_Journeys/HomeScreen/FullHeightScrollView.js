import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export function FullHeightScrollView({ children, ...props }) {
  return (
    <ScrollView contentContainerStyle={styles.grow} {...props}>
      {children}
    </ScrollView>
  );
}

FullHeightScrollView.propTypes = {
  children: PropTypes.node.isRequired,
  // Include other prop types as needed
};

const styles = StyleSheet.create({
  grow: { flexGrow: 1 },
});
