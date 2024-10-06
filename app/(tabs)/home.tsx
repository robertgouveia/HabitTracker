import { router } from 'expo-router'
import * as React from 'react'
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Header from '../../components/Header'
import { colors } from '../../constants/globals'

const Home = () => {
  return (
    <>
      <Header
        title="Habit Tracker"
        left={() => (
          <Button
            title="logout"
            onPress={() => router.navigate('/')}
          />
        )}
      />
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.metric}>
            <Text style={styles.metricNumber}>156d</Text>
            <Text style={styles.metricTitle}>Streak</Text>
          </View>

          <View style={styles.metric}>
            <Text style={styles.metricNumber}>4</Text>
            <Text style={styles.metricTitle}>Habits</Text>
          </View>

          <View style={styles.metric}>
            <Text style={styles.metricNumber}>3</Text>
            <Text style={styles.metricTitle}>AP</Text>
          </View>
        </View>

        <View style={styles.actionContainer}>
          <View style={styles.actionTitleContainer}>
            <Text style={styles.actionTitle}>Action Dashboard</Text>
          </View>
          <ScrollView contentContainerStyle={styles.actionDashboard}>
            <View style={styles.action}>
              <View style={styles.actionHeader}>
                <Text style={styles.actionHeaderTitle}>Programming</Text>
                <Text style={styles.actionHeaderSubtitle}>132d</Text>
              </View>
              <View style={styles.actionDescriptionContainer}>
                <Text style={styles.actionDescription}>
                  Programming once a day at least 1 hour!
                </Text>
              </View>
              <View style={styles.actionButtonContainer}>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Complete</Text>
                </TouchableOpacity>
                <View style={styles.actionTimer}>
                  <Text style={styles.actionTimerText}>16h 23m Left</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    padding: 24,
  },
  section: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  metric: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'darkgray',
    height: 80,
  },
  metricNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
  },
  metricTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
  },
  actionContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    alignContent: 'center',
  },
  actionTitleContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 24,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'gray',
  },
  actionDashboard: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 6,
  },
  action: {
    padding: 24,
    borderWidth: 1,
    height: 150,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionHeader: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  actionHeaderTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  actionHeaderSubtitle: {
    color: colors.primary,
    fontWeight: '800',
  },
  actionDescriptionContainer: {},
  actionDescription: {
    color: 'darkgray',
    marginBottom: 16,
  },
  actionButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 6,
  },
  actionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: colors.primary,
  },
  actionButtonText: {
    color: 'white',
  },
  actionTimer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: 'gray',
  },
  actionTimerText: {
    color: 'lightgray',
  },
})
