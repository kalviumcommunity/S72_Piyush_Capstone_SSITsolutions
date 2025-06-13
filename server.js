const express = require('express');
const app = express();

// Sample data for demonstration
const energyData = [
  {
    id: 1,
    deviceName: 'Server-01',
    energyUsage: 245.5,
    timestamp: '2024-03-22T10:00:00Z',
    carbonEmission: 98.2
  },
  {
    id: 2,
    deviceName: 'Cloud-Instance-A',
    energyUsage: 180.3,
    timestamp: '2024-03-22T10:00:00Z',
    carbonEmission: 72.1
  }
];

const recommendations = [
  {
    id: 1,
    type: 'hardware',
    description: 'Switch to energy-efficient servers',
    potentialSaving: '30%',
    priority: 'high'
  },
  {
    id: 2,
    type: 'cloud',
    description: 'Optimize cloud instance sizes',
    potentialSaving: '25%',
    priority: 'medium'
  }
];

// GET endpoint for energy usage data
app.get('/api/energy-usage', (req, res) => {
  res.json({
    success: true,
    data: energyData
  });
});

// GET endpoint for specific device energy usage
app.get('/api/energy-usage/:deviceId', (req, res) => {
  const device = energyData.find(d => d.id === parseInt(req.params.deviceId));
  if (!device) {
    return res.status(404).json({
      success: false,
      message: 'Device not found'
    });
  }
  res.json({
    success: true,
    data: device
  });
});

// GET endpoint for optimization recommendations
app.get('/api/recommendations', (req, res) => {
  res.json({
    success: true,
    data: recommendations
  });
});

// GET endpoint for system status
app.get('/api/status', (req, res) => {
  res.json({
    success: true,
    status: 'operational',
    lastUpdate: new Date().toISOString(),
    activeMonitoring: true
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});