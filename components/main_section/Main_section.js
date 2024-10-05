import { Title, Button, Text, Container, Anchor } from '@mantine/core';

const Main_section = () => {
  return (
    
    <Container
      size="100%"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#17171E',
        color: 'white',
        padding: 0, // Remove padding if any
      }}
    >
      <Anchor href="" size="sm" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        HOW IT WORKS
      </Anchor>
      
      <div style={{ textAlign: 'center', margin: '35px' }}>
        <Title order={1} style={{ fontSize: '46px' }}>Vocal Remover and Isolation</Title>
        <Text size="xl" color="#D8D8E2" style={{ fontSize: '24px',margin:'10px' }}>
          Separate voice from music out of a song free with powerful AI algorithms
        </Text>
      </div>
      
      <div style={{ margin: '20px' }}>
        <img src="/player_en.png" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '40px' }}>
        <Button
          variant="outline"
          styles={{
            root: {
              padding: '11px 25px',
              border: '2px solid #5a52c5',
              borderRadius: '100px',
              transition: 'background-color 0.3s',
                color:'white',
              '&:hover': {
                backgroundColor: '#5a52c5c5',
              },
            },
          }}
        >
          Browse my file
        </Button>
      </div>
    </Container>
  )
}

export default Main_section