/* eslint-disable react/prop-types */
import * as React from 'react'
import { Grid, Paper } from '@mui/material'
import Loader from '../Loader'

export default function CategoriesTable({ categories = [] }) {
  return (
    <Paper elevation={4}>
      {categories?.length ? (
        <>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            style={{
              textAlign: 'center',
              fontWeight: 700,
              height: '5rem',
              borderBottom: '2px solid rgb(255, 137, 130)',
              borderTop: '2px solid rgb(255, 137, 130)',
              fontSize: '18px'
            }}
          >
            <Grid item xs={6} style={{ borderRight: '2px solid rgb(255, 137, 130)', lineHeight: '5.8rem' }}>
              Date
            </Grid>
            <Grid item xs={6} style={{ lineHeight: '5.8rem' }}>
              Name
            </Grid>
          </Grid>
          <Grid container justifyContent='center' alignItems='center' style={{ textAlign: 'center' }}>
            {(categories || []).map((c, i) => {
              return (
                <>
                  <Grid
                    item
                    xs={6}
                    style={{
                      ...(i !== categories.length - 1 ? { borderBottom: '2px solid rgb(255, 137, 130)' } : {}),
                      borderRight: '2px solid rgb(255, 137, 130)',
                      lineHeight: '4rem'
                    }}
                    title={new Date(c.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  >
                    {new Date(c.date).toDateString()}
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{
                      borderRight: '2px solid rgb(255, 137, 130)',
                      ...(i !== categories.length - 1 ? { borderBottom: '2px solid rgb(255, 137, 130)' } : {}),
                      lineHeight: '4rem'
                    }}
                  >
                    {c.name}
                  </Grid>
                </>
              )
            })}
          </Grid>
        </>
      ) : (
        <>
          <h2 style={{ textAlign: 'center' }}>No Trasactions Found</h2>
          <Loader />
        </>
      )}
    </Paper>
  )
}
